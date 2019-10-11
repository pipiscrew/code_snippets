//in form
Executor exec;


        private void btnWork_Click(object sender, EventArgs e)
        {
            Thread oThread;
            oThread = new Thread(DoConvert);
            oThread.Start();
        }

        private delegate void DoConvertDelegate();
        private void DoConvert()
        {
            if (lstv.InvokeRequired)
            {
                Invoke(new DoConvertDelegate(DoConvert));
                return;
            }

            //for (int i = 0; i < lstv.Items.Count; i++)
            //{
                ProcessNextFile((VideoItem)lstv.Items[0].Tag,0);
            //}
        }

        private void ProcessNextFile(VideoItem vd,int lstvIndex)
        {
            //Executor exec = new Executor();
            exec = new Executor();
            exec.cmd = cmd;
            exec.videoTime = TimeSpan.Parse(vd.videotime);
            exec.lstvIndex = lstvIndex;
            exec.filename = vd.filepath;

            //create thread
            Thread oThread;
            oThread = new Thread(new ThreadStart(exec.ProcessVideo));
            exec.Changed += proStatus;
            exec.fileFinished += goNext;
            oThread.Start();
            //ProcessVideo(Application.StartupPath + "\\ffmpeg.exe",cmd);;
        }

        delegate void proStatusCallback(double val, string fl, string flSize);
        private void proStatus(double val, string fl, string flSize)
        {
            if (this.InvokeRequired)
            {
                this.BeginInvoke(new proStatusCallback(proStatus), new object[] { val,fl,flSize });
                return;
            }

            //change control
            progressBar1.Value = (int) val;


            if (val == 100)
            {
                if (File.Exists(Path.GetDirectoryName(fl) + "\\converted\\" + Path.GetFileNameWithoutExtension(fl) + ".mp4"))
                {
                    FileInfo f = new FileInfo((Path.GetDirectoryName(fl) + "\\converted\\" + Path.GetFileNameWithoutExtension(fl) + ".mp4"));
                    lblSize.Text = General.GetFileSize(f.Length);
                    lblFL.Text += " **completed**";
                }
            }
            else
            {
                double flS = double.Parse(flSize);
                lblSize.Text = General.GetFileSize(flS * 1000);
                lblFL.Text = fl;
            }
        }

        delegate void goNextCallback(int val);
        private void goNext(int val)
        {
            if (this.InvokeRequired)
            {
                this.BeginInvoke(new goNextCallback(goNext), new object[] { val });
                return;
            }

            lstv.Items[val].SubItems[10].Text = lblSize.Text;

            val += 1;

            if (lstv.Items.Count > val)
            {
                VideoItem tmp = (VideoItem)lstv.Items[val].Tag;

                ProcessNextFile(tmp, val);
            }

            //change control
            //progressBar1.Value = (int)val;

        }


        private void button1_Click(object sender, EventArgs e)
        {
        	//user press cancel from FORM
            if (exec != null) 
                exec.RequestStop();
        }


//class
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.IO;
using System.Diagnostics;
using System.Windows.Forms;

namespace ffmpegmp4
{
    class Executor
    {

        public delegate void Statuschanged(double val,string fl,string flSize);
        public event Statuschanged Changed;

        public delegate void processFinished(int lstvIndex);
        public event processFinished fileFinished;

        public string cmd { get; set; }
        public TimeSpan videoTime { get; set; }
        public int lstvIndex { get; set; }
        public string _filename { get; set; }
        internal string fullFilePath { get; set; }

        public string filename
        {
            get { return _filename; }
            set 
            {
                _filename = Path.GetFileName( value);
                fullFilePath = value;
            }
        }


        private volatile bool _shouldStop;

        public void ProcessVideo()
        {
            Stream sWR;
            StreamReader standardError;

            TimeSpan tmProcess;

            // Start the child process.
            Process p = new Process();

            // Redirect the output stream of the child process.
            p.StartInfo.UseShellExecute = false;
            //            p.StartInfo.RedirectStandardOutput = true;
            p.StartInfo.RedirectStandardError = true;
            p.StartInfo.RedirectStandardInput = true;
            p.StartInfo.FileName = Application.StartupPath + "\\ffmpeg.exe";
            p.StartInfo.CreateNoWindow = true;
            p.StartInfo.Arguments = cmd;
            p.Start();
            Console.WriteLine(cmd);

            sWR = p.StandardInput.BaseStream;

            //wait to be ready
            while (sWR == null)
            {
            }
            while (!sWR.CanWrite)
            {
            }

            string str = null;
            string finalSTR = "";
            standardError = p.StandardError;


            while ((str = standardError.ReadLine()) != null)// && !_shouldStop)
            {
                if (_shouldStop)
                    break;


                finalSTR += str;

                if (str == null || str.Contains("maybe incorrect parameters"))
                {
                    break;
                }


                Match match = Regex.Match(str, @"size\s*=\s*(\d+).*time\s*=\s*(\d+):(\d+):(\d+)", RegexOptions.IgnoreCase);

                if (match.Success)
                {
                    //Console.WriteLine("1-" + match.Groups[1].Value.Trim());

                    //Console.WriteLine("2-" + match.Groups[2].Value.Trim()); //h
                    //Console.WriteLine("3-" + match.Groups[3].Value.Trim()); //m
                    //Console.WriteLine("3-" + match.Groups[4].Value.Trim()); //sec

                    //double progressRatio = progressTimeSpan.Ticks / (double)totalTimeSpan.Ticks

                    tmProcess=TimeSpan.Parse(match.Groups[2].Value.Trim() + ":" + match.Groups[3].Value.Trim() + ":" + match.Groups[4].Value.Trim());
                    double progressRatio = tmProcess.Ticks / (double)videoTime.Ticks;

                    Changed(progressRatio * 100, filename, match.Groups[1].Value.Trim());
                    //Console.WriteLine(progressRatio.ToString());
                }

            }

            if (_shouldStop)
                p.Kill();
            else
                Changed(100, fullFilePath, "0");

            fileFinished(lstvIndex);
        }

        public void RequestStop()
        {
            _shouldStop = true;
        }
    }
}