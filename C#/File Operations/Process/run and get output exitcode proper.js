//http://stackoverflow.com/questions/4504170/why-processs-exited-method-not-being-called

            ProcessStartInfo ProcessInfo;
            ProcessInfo = new ProcessStartInfo(pathName, arg);
            ProcessInfo.CreateNoWindow = true;
            ProcessInfo.UseShellExecute = false;
            ProcessInfo.WorkingDirectory = Application.StartupPath;

            Process process = Process.Start(ProcessInfo);
            process.EnableRaisingEvents = true;
            process.Exited += new EventHandler(process_Exited); 