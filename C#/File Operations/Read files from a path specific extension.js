            string[] xmlFiles = Directory.GetFiles(Application.StartupPath + "\\background", "*.xml");
            string tmp;

            foreach (string item in xmlFiles)
            {
                tmp = Path.GetFileNameWithoutExtension(item).ToLower();
                if (!tmp.ToLower().StartsWith("style"))
                    cmbBackground.Items.Add(tmp);
            }