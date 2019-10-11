//https://stackoverflow.com/a/24405838/1320686
        private static string ExistsOnPath(string exeName)
        {
            string output = null;
            try
            {
                Process p = new Process();
                p.StartInfo.UseShellExecute = false;
                p.StartInfo.FileName = "where";
                p.StartInfo.Arguments = exeName;
                p.StartInfo.CreateNoWindow = true;
                p.StartInfo.RedirectStandardOutput = true;
                p.Start();
                output = p.StandardOutput.ReadToEnd();
                p.WaitForExit();

                if (p.ExitCode != 0)
                    return null;

                // just return first match
                return output.Substring(0, output.IndexOf(Environment.NewLine));

            }
            catch
            {
                return null;
            }
            
        }
        
            if ((General.fullpath = ExistsOnPath("keytool.exe")) == null)
            {
                General.Mes("the exe couldnt found on PATH environment\r\n\r\nOperation aborted!", MessageBoxIcon.Exclamation);
                return;
            }