        private void writeDBRoots2File(string[] names)
        {
            try
            {
                string tmp = comboDBASE.Text.ToLower().Replace("https://", "").Replace("firebaseio.com", "");
                File.WriteAllText(Application.StartupPath + "\\" + tmp + "ini", string.Join("\r\n", names));
            }
            catch { }
        }
        
//will look as 
countries
peopletype
categories
app_settings