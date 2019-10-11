//http://stackoverflow.com/questions/661561/how-to-update-gui-from-another-thread-in-c
//http://www.codeproject.com/KB/threads/csharp_guithreads.aspx
#on form we start the thread
		// The class that has the method we'll use
		Copier CopyList;
		// Instantiage the object
		CopyList = new Copier(phone, General.CopyFilesList, GetPathFromTreeview());
		// The thread object itself
		Thread oThread;
		// Instantiate the thread and define the method 
		// that will be used when the thread runs
		oThread = new Thread(new ThreadStart(CopyList.StartCopy));
		// disable any CTL before thread starts
		lstv.Enabled = false;
		TR.Enabled=false;
		//set the event
		CopyList.Changed += takis;
		oThread.Start();
		

#the event on form		
        delegate void TakisCallback(int val);

        private void takis(int val)
        {
            //cross thread - so you don't get the cross theading exception
            if (this.InvokeRequired)
            {
               this.BeginInvoke(new TakisCallback(this.takis), new object[] { val });
                return;
            }

            //change control
            this.toolStripProgressBar2.Value = val;
        }
        
#class
using System;
using System.Collections.Generic;
using System.Text;
using System.Collections;
using PodPhone2;
using System.IO;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    class Copier
    {
        ArrayList FilesL;
        string DestFolder;
        iPhone phone;

        public delegate void Statuschanged(int val);
        public event Statuschanged Changed;

        public Copier(iPhone PH,ArrayList FileList, string dFolder)
        {
            phone = PH;
            DestFolder = dFolder;
            FilesL = FileList;
        }

        public void StartCopy()
        {
            int cnt;
            string tmpLoc;

            for (cnt = 0; cnt < FilesL.Count; cnt++)
            {
                tmpLoc = FilesL[cnt].ToString();
                CopyFile(phone, tmpLoc, DestFolder + "/" + Path.GetFileName(tmpLoc));

                Changed(cnt);
            }
        }

       private bool CopyFile(iPhone thisiPhone, string sourceOnPC, string destinationOnPhone)
        {
            int num5;

            byte[] array = new byte[0x10001];
            if (thisiPhone.Exists(destinationOnPhone))
            {
                return true;
                // thisiPhone.DeleteFile(destinationOnPhone);
            }
            iPhoneFile file = iPhoneFile.OpenWrite(thisiPhone, destinationOnPhone);
            FileStream stream = File.OpenRead(sourceOnPC);
            int num4 = 0;
            while ((num4 + 0x10000) < stream.Length)
            {
                //if (Form1.nowTransferringDLG.isCancelled)
                //{
                //    file.Close();
                //    stream.Close();
                //    return false;
                //}
                num5 = stream.Read(array, 0, array.Length);
                file.Write(array, 0, num5);
                num4 += 0x10000;
            }
            int count = ((int)stream.Length) - num4;
            byte[] buffer2 = new byte[count + 1];
            num5 = stream.Read(buffer2, 0, count);
            file.Write(buffer2, 0, count);
            file.Close();
            stream.Close();

            return true;
        }

   }
}
