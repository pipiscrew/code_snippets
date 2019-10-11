            System.IO.DirectoryInfo dir = new System.IO.DirectoryInfo(Application.StartupPath + "\\templates");
            foreach (System.IO.DirectoryInfo f in dir.GetDirectories())
            {
                cmbTemplate.Items.Add(f.Name);
            }