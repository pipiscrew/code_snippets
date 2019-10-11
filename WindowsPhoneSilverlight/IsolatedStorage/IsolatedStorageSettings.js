//http://www.windowsphonegeek.com/tips/all-about-wp7-isolated-storage-store-data-in-isolatedstoragesettings

        void appBarSave_Click(object sender, EventArgs e)
        {
            try
            {
                IsolatedStorageSettings settings = IsolatedStorageSettings.ApplicationSettings;
                settings["OnLocked"] = chkPLunderLOCK.IsChecked;
                NavigationService.GoBack();
            }
            catch
            { }
        }
        
        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            try
            {
                IsolatedStorageSettings settings = IsolatedStorageSettings.ApplicationSettings;
 				
 				if (settings.Count>0)
                chkPLunderLOCK.IsChecked = (bool)settings["OnLocked"];
            }
            catch 
            { }
        }
        
#validate if exists
if(settings.Contains("myemail"))
        
#remove a key from..
if (userSettings.Remove("name") == true)
{    tbResults.Text = "Name removed. Refresh page to see changes.";}
else
{    tbResults.Text = "Name could not be removed. Key does not exist.";}

#zero the settings
settings.Clear();