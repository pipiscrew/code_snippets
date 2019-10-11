//PRJ properties > Settings add the variables there
//save
        global::Artfulbits.Android.Localization.Properties.Settings.Default.LastAppFolder = fbdProjectBrowser.SelectedPath;
        global::Artfulbits.Android.Localization.Properties.Settings.Default.Save();

//load
    private void MainForm_Load( object sender, EventArgs e )
    {
      global::Artfulbits.Android.Localization.Properties.Settings.Default.Reload();
      fbdProjectBrowser.SelectedPath = global::Artfulbits.Android.Localization.Properties.Settings.Default.LastAppFolder
      
      
//warning when there is no config file will be exceptions, solution :
@ program.cs

          string loc = Assembly.GetEntryAssembly().Location;

          if (!File.Exists(String.Concat(loc, ".config")))
          {
              System.IO.File.WriteAllText(String.Concat(loc, ".config"), Artfulbits.Android.Localization.Properties.Resources.config);
              MessageBox.Show("Config file created, application will restart itself!",Application.ProductName,MessageBoxButtons.OK,MessageBoxIcon.Information);
              Application.Restart();
              return;
          }