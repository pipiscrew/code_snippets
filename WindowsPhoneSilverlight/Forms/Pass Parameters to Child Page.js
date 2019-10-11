'we pass parameters as:
                this.NavigationService.Navigate(
                    new Uri("/pages/Player.xaml?ID=" + curItem.StationID, UriKind.Relative)
                );
                
'and in Player.xaml @ page load 
            if (this.NavigationContext.QueryString.Keys.Contains("ID"))
            {
                string ID = this.NavigationContext.QueryString["ID"];
            }
            else
            {
                MessageBox.Show("No Station ID passed!", "miRoamer", MessageBoxButton.OK);
                NavigationService.GoBack();
            }