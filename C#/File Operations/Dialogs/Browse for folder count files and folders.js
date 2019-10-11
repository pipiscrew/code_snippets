            FolderBrowserDialog fbd = new FolderBrowserDialog();
            if (fbd.ShowDialog() == System.Windows.Forms.DialogResult.OK)
            {
                txtStartDir.Text = fbd.SelectedPath;

                //string[] files = Directory.GetFiles(fbd.SelectedPath);
                //System.Windows.Forms.MessageBox.Show("Files found: " + files.Length.ToString(), "Message");

                txtRootFolderCount.Text = "Root Folders : " + Directory.GetDirectories(txtStartDir.Text).Count().ToString();
            }