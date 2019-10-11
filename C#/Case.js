        private void listBox1_SelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            // if an item is selected
            if (listBox1.SelectedIndex != -1)
            {
                switch (listBox1.SelectedIndex)
                {
                    case 0:
                        this.NavigationService.Navigate(
                            new Uri("/pages/LocalStation.xaml", UriKind.Relative)
                        );
                        break;
                    case 1:
                        this.NavigationService.Navigate(
                            new Uri("/pages/Genre.xaml", UriKind.Relative)
                        );
                        break;
                    case 2:
                        this.NavigationService.Navigate(
                            new Uri("/pages/Region.xaml", UriKind.Relative)
                        );
                        break;
                    case 3:
                        this.NavigationService.Navigate(
                            new Uri("/pages/Testing.xaml", UriKind.Relative)
                        );
                        break;
					default:
						Console.WriteLine("Default case");
						break;
                }

            }
        }
        
//multiple
            {    
                case "string":
                    return "'";
                case "int" : case "decimal" : case "byte":
                	return "";
                	
//OR
switch (value)
{
   case 1...3:
      //Do Something
      break;
   case 4...6:
      //Do Something
      break;
   default:
      //Do the Default
      break;
}