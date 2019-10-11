
        private bool Compile(string dir,bool isForm)
        {
            try
            {
                Process msbProcess = new Process();
                msbProcess.StartInfo.FileName = @"C:\Windows\Microsoft.NET\Framework\v3.5\csc.exe";
                //     msbProcess.StartInfo.Arguments = "/platform:x86 /debug- /optimize /out:\"" + Application.StartupPath  + "\\patch.exe\" \"" + dir + "\\*.cs\"";
                msbProcess.StartInfo.Arguments = "/platform:x86 /debug- /optimize " + (isForm ? "/t:winexe " : "") + "/out:\"" + dir + "\\patch.exe\" \"" + dir + "\\w.cs\"";
                msbProcess.StartInfo.CreateNoWindow = true;

                msbProcess.Start();
                msbProcess.WaitForExit();

                //if (msbProcess.ExitCode != 0)
                //    return false;
                //else
                //    return true;

                if (File.Exists(dir + "\\patch.exe"))
                    return true;
                else
                    return false;

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, apTitle, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                return false;
            }
        }