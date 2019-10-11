//as sub (batch file supported)
        private void ExecuteWithArgs(string fl, string args)
        {
            Process msbProcess = new Process();
            msbProcess.StartInfo.FileName = fl;
            msbProcess.StartInfo.Arguments = args;
            msbProcess.StartInfo.WorkingDirectory = Path.GetDirectoryName(fl);
            msbProcess.StartInfo.RedirectStandardError = false;
            msbProcess.StartInfo.RedirectStandardOutput = false;
            msbProcess.StartInfo.UseShellExecute = false;
            msbProcess.Start();
            msbProcess.WaitForExit();
        }
        
//or direct
        public void ExecuteCommand(string command)
    {
        int ExitCode;
        ProcessStartInfo ProcessInfo;
        Process process;

        ProcessInfo = new ProcessStartInfo(Application.StartupPath + "\\txtmanipulator\\txtmanipulator.bat", command);
        ProcessInfo.CreateNoWindow = true;
        ProcessInfo.UseShellExecute = false;
        ProcessInfo.WorkingDirectory = Application.StartupPath + "\\txtmanipulator";
        // *** Redirect the output ***
        ProcessInfo.RedirectStandardError = true;
        ProcessInfo.RedirectStandardOutput = true;

        process = Process.Start(ProcessInfo);
        process.WaitForExit();

        // *** Read the streams ***
        string output = process.StandardOutput.ReadToEnd();
        string error = process.StandardError.ReadToEnd();

        ExitCode = process.ExitCode;

        MessageBox.Show("output>>" + (String.IsNullOrEmpty(output) ? "(none)" : output));
        MessageBox.Show("error>>" + (String.IsNullOrEmpty(error) ? "(none)" : error));
        MessageBox.Show("ExitCode: " + ExitCode.ToString(), "ExecuteCommand");
        process.Close();
    }
    
//function modded


        private string ExecuteCommand(string fl, string arg, out int exitC)
        {
            //int ExitCode;
            ProcessStartInfo ProcessInfo;
            Process process;

            ProcessInfo = new ProcessStartInfo(fl, arg);
            ProcessInfo.CreateNoWindow = true;
            ProcessInfo.UseShellExecute = false;
            ProcessInfo.WorkingDirectory = Path.GetDirectoryName(fl);


            // Redirect the output
            ProcessInfo.RedirectStandardError = true;
            ProcessInfo.RedirectStandardOutput = true;

            process = Process.Start(ProcessInfo);
            process.WaitForExit();

            // *** Read the streams ***
            string output = process.StandardOutput.ReadToEnd();
            string error = process.StandardError.ReadToEnd();

            exitC = process.ExitCode;

            //MessageBox.Show("output>>" + (String.IsNullOrEmpty(output) ? "(none)" : output));
            //MessageBox.Show("error>>" + (String.IsNullOrEmpty(error) ? "(none)" : error));
            //MessageBox.Show("ExitCode: " + ExitCode.ToString(), "ExecuteCommand");
            process.Close();

            return String.IsNullOrEmpty(output) ? "" : output;
        }