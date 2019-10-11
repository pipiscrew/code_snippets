        private bool CompileVC()
        {
            //http://stackoverflow.com/questions/8072998/how-to-detect-the-status-of-msbuild-from-command-line-or-c-sharp
            try
            {
                Process msbProcess = new Process();
                msbProcess.StartInfo.FileName = currFramework + "\\" + lstFramework.CheckedItems[0].ToString() + "\\MSBuild.exe";
                msbProcess.StartInfo.Arguments = "\"" + Application.StartupPath + "\\VC\\veteran.vcxproj \" /t:Rebuild /p:Configuration=Release";
                msbProcess.Start();
                msbProcess.WaitForExit();

                if (msbProcess.ExitCode != 0)
                    return false;
                else
                    return true;

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                return false;
            }
        }