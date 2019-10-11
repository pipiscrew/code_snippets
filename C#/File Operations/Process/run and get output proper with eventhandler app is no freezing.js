//you can also catch the exitcode via adding
process.EnableRaisingEvents = true; @ RunAndGetOutput2
process.Exited += new EventHandler(process_Exited);
and event

        void process_Exited(object sender, EventArgs e)
        {
        //process.OutputDataReceived += new DataReceivedEventHandler(proc_OutputDataReceived);
        //should be attached
        
            Console.WriteLine((sender as Process).ExitCode);
        }
        

        
        
        private void button1_Click(object sender, EventArgs e)
        {
            RunAndGetOutput2("node.exe", fileJS.Text);
        }

        private void RunAndGetOutput2(string pathName, string arg)
        {
            ProcessStartInfo ProcessInfo;
            Process process;
            ProcessInfo = new ProcessStartInfo(pathName, arg);
            ProcessInfo.CreateNoWindow = true;
            ProcessInfo.UseShellExecute = false;
            ProcessInfo.WorkingDirectory = Application.StartupPath;
            
            // *** SET encoding ***
            ProcessInfo.StandardErrorEncoding = Encoding.UTF8;
            ProcessInfo.StandardOutputEncoding = Encoding.UTF8;
            
            // *** Redirect the output ***
            ProcessInfo.RedirectStandardError = true;
            ProcessInfo.RedirectStandardOutput = true;

            process = Process.Start(ProcessInfo);
            process.OutputDataReceived += new DataReceivedEventHandler(proc_OutputDataReceived);
            process.BeginOutputReadLine();
            System.Threading.Thread.Sleep(300); //sleep otheriwse boom
            process.ErrorDataReceived += new DataReceivedEventHandler(proc_ErrorDataReceived);
            process.BeginErrorReadLine();

            //process.WaitForExit();
        }

        private delegate void proc_OutputDataReceivedDelegate(object sendingProcess, DataReceivedEventArgs outLine);
        private void proc_OutputDataReceived(object sendingProcess,  DataReceivedEventArgs outLine)
        {
            if (textBox2.InvokeRequired)
            {
                BeginInvoke(new proc_OutputDataReceivedDelegate(proc_OutputDataReceived), new object[] { sendingProcess, outLine });
                return;
            }

            // Collect the sort command output. 
            if (!String.IsNullOrEmpty(outLine.Data))
            {
                // Add the text to the collected output.
                textBox2.AppendText(Environment.NewLine + outLine.Data);
            }
        }


        private delegate void proc_ErrorDataReceivedDelegate(object sendingProcess, DataReceivedEventArgs outLine);
        private void proc_ErrorDataReceived(object sendingProcess, DataReceivedEventArgs outLine)
        {
            if (textBox2.InvokeRequired)
            {
                BeginInvoke(new proc_ErrorDataReceivedDelegate(proc_ErrorDataReceived), new object[] { sendingProcess, outLine });
                return;
            }

            // Collect the sort command output. 
            if (!String.IsNullOrEmpty(outLine.Data))
            {
                // Add the text to the collected output.
                textBox2.AppendText(Environment.NewLine + outLine.Data);
            }
        }