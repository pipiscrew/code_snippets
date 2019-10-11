//http://www.davidpoll.com/2009/07/12/silverlight-3-navigation-navigating-to-pages-in-referenced-assemblies/

add as references the tunein.dll to ur project then 

this.NavigationService.Navigate(new Uri("/TuneIn;component/views/mainpage.xaml", UriKind.Relative));

but can load the class TuneIn.MainPage (strange!)