//reference for static output event (is more stable)
//http://msdn.microsoft.com/en-us/library/system.diagnostics.process.outputdatareceived.aspx

//the call
            Cursor = System.Windows.Forms.Cursors.WaitCursor;
            ProcessExecutor PP = new ProcessExecutor(Application.StartupPath + "\\utils\\keytool.exe", "-list -printcert -jarfile \"" + txtAPK.Text + "\"", Application.StartupPath + "\\utils\\");

            PP.OUTputSTR += delegate(string value)
            {
                Cursor = System.Windows.Forms.Cursors.Default;
                apkINFO APK_INFO = new apkINFO(value);
                APK_INFO.ShowDialog();
            };

            PP.run();
            

//the class
    class ProcessExecutor
    {
        //event
        public delegate void OutputSTR(string value);
        public event OutputSTR OUTputSTR;

        private string exe, arg, workingPath;
        private static string output="";

        public ProcessExecutor(string exe, string arg, string workingPath)
        {
            this.exe = exe;
            this.arg = arg;
            this.workingPath = workingPath;
        }

        public void run()
        {
            output = "";
            try
            {
                ProcessStartInfo ProcessInfo;
                Process process;
                ProcessInfo = new ProcessStartInfo(exe, arg);
                ProcessInfo.CreateNoWindow = true;
                ProcessInfo.UseShellExecute = false;

                ProcessInfo.WorkingDirectory = workingPath;

                // *** SET encoding ***
                ProcessInfo.StandardOutputEncoding = Encoding.UTF8;

                // *** Redirect the output ***
                ProcessInfo.RedirectStandardOutput = true;

                process = Process.Start(ProcessInfo);

                process.OutputDataReceived += new DataReceivedEventHandler(SortOutputHandler);//+= new DataReceivedEventHandler(proc_OutputDataReceived);
                process.BeginOutputReadLine();

                process.WaitForExit();
            }
            catch (Exception ex){
                output = ex.Message;
            }
            finally
            {
                if (OUTputSTR != null)
                    OUTputSTR(output);
            }
        }

        private void SortOutputHandler(object sendingProcess, DataReceivedEventArgs outLine)
        {
            // Collect the sort command output. 
            if (!String.IsNullOrEmpty(outLine.Data))
            {
                output += outLine.Data + "\r\n";
            }
        }
    }