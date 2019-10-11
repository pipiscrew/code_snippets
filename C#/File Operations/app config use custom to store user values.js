//default uses appname.exe.config with this way made appname.config
//do not ask why! MS!

//import System.Configuration
        private void MainForm_Load(object sender, EventArgs e)
        {
            if (File.Exists(Path.GetFileNameWithoutExtension(Application.ExecutablePath) + ".config"))
            {
                Configuration oConfig = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);

                txtServer.Text = (ConfigurationManager.AppSettings["Server"]);
                txtDBASE.Text = (ConfigurationManager.AppSettings["Catalog"]);
                txtUser.Text = (ConfigurationManager.AppSettings["User"]);
                txtPassword.Text = ConvertFromBase64(ConfigurationManager.AppSettings["Password"]);
            }
            else
            {
                Configuration oConfig = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);

                MessageBox.Show(oConfig.FilePath);
                oConfig.AppSettings.Settings.Add("Server", "!@#");
                oConfig.AppSettings.Settings.Add("Catalog", "!@#");
                oConfig.AppSettings.Settings.Add("User", "!@#");
                oConfig.AppSettings.Settings.Add("Password", "!@#");
                oConfig.Save();

            }

        }

        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            if (General.ADOClass != null)
                General.ADOClass.Close();

            if (File.Exists(Path.GetFileNameWithoutExtension(Application.ExecutablePath) + ".config")) //(General.AppConfigExists())
            {

                Configuration oConfig = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);

                oConfig.AppSettings.Settings["Server"].Value = (txtServer.Text);
                oConfig.AppSettings.Settings["Catalog"].Value = (txtDBASE.Text);
                oConfig.AppSettings.Settings["User"].Value = (txtUser.Text);
                oConfig.AppSettings.Settings["Password"].Value = ConvertToBase64(txtPassword.Text);

                oConfig.Save(ConfigurationSaveMode.Modified);
            }
        }
