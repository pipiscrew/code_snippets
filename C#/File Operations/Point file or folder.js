//Point inside a folder
Process.Start(txtSaveDir.Text);

//Point a file or folder
        internal static void PointFile(string filepath)
        {
            Process objProcess = default(System.Diagnostics.Process);
            try
            {
                objProcess = new System.Diagnostics.Process();
                objProcess.StartInfo.FileName = "explorer.exe";
                objProcess.StartInfo.Arguments = "/select, " + filepath;
                objProcess.StartInfo.WindowStyle = ProcessWindowStyle.Normal;
                objProcess.Start();

                objProcess.Close();
            }
            catch
            {
            }
        }
        
//http://stackoverflow.com/a/1132559 (open into folder)

        internal static void PointInsideFolder(string filepath)
        {
            System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo()
            {
                FileName = filepath,
                UseShellExecute = true,
                Verb = "open"
            });
        }