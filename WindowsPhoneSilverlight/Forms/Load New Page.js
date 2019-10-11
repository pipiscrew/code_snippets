this.NavigationService.Navigate(
                            new Uri("/pages/Region.xaml", UriKind.Relative)
                        );
                        
'WARNING when a new page loaded the previous totally destroyed        


'we pass parameters as:
                this.NavigationService.Navigate(
                    new Uri("/pages/Player.xaml?pid=" + curItem.StationID, UriKind.Relative)
                );
                
'and in Player.xaml @ page load 

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            // get the city, latitude, and longitude out of the query string 
            string pID = this.NavigationContext.QueryString["pid"];
        }
        
'GoBack vs Navigate
//http://www.eugenedotnet.com/2011/02/w18-difference-between-goback-method-and-navigate-method-of-navigationservice/
'"GoBack" system will return to page 1
'having the same text in textbox restored
 NavigationService.GoBack();
 
 'Navigate
  A new instance of Page 1 will be created making our text disappear