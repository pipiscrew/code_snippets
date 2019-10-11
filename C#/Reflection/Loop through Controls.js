            Assembly a = Assembly.LoadFile(Application.StartupPath + "\\CIC Language Coding Utility.exe");

            Type withoutFor;
            withoutFor = a.GetType("CIC_Language_Coding_Utility.MainForm");

            Form obj;
            obj = (Form)Activator.CreateInstance(withoutFor, true);
            obj.Show();

            for (int i = obj.Controls.Count - 1; i >= 0; i += -1)
            {

                if (obj.Controls[i].Name == "Button1")
                {
                    obj.Controls[i].Text = ">>> development by RONGCHAUA the magician <<<";
                }

                if (obj.Controls[i].Name == "Language1")
                {
                    obj.Controls[i].Enabled=true;
                }

            }