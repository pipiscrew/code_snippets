//http://stackoverflow.com/questions/14709241/find-out-if-a-process-finished-running

        private void sdjkf()
        {
            Process[] processes = Process.GetProcessesByName("WinSCP");

            if (processes.Length > 0)
            {
                if (MessageBox.Show(processes.Length + " WinSCP instances found, terminate ?", Application.ProductName, MessageBoxButtons.YesNo,MessageBoxIcon.Information) == System.Windows.Forms.DialogResult.Yes)
                {
                    foreach (var process in processes)
                        process.Kill();
                }
            }
       }