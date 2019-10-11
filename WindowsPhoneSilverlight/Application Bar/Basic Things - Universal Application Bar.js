#at App.xaml
the icons should be marked as BuilkdAction = Content , Otherwise if we want it as local (inside XAP)
files ex. "/Assets/Images/logo.png"

    <!--Application Resources-->
    <Application.Resources>
        <!-- Application Bar -->
        <shell:ApplicationBar x:Key="GlobalApplicationBar" IsVisible="True">
            <shell:ApplicationBar.Buttons>
                <shell:ApplicationBarIconButton Text="Home" IconUri="/img/appbar.home.rest.png" Click="appBarHome_Click" />
                <shell:ApplicationBarIconButton Text="Favorites" IconUri="/img/appbar.favorites.rest.png" Click="appBarFavorites_Click" />
                <shell:ApplicationBarIconButton Text="Stop" IconUri="/img/appbar.stop.rest.png" Click="appBarControl_Click" />
                <shell:ApplicationBarIconButton Text="Settings" IconUri="/img/appbar.settings.rest.png" Click="appBarSettings_Click" />
            </shell:ApplicationBar.Buttons>
        </shell:ApplicationBar>
        
#at App.xaml.cs

        void appBarHome_Click(object sender, EventArgs e)
        {
            PhoneApplicationFrame root = Application.Current.RootVisual as PhoneApplicationFrame;
            root.Navigate(new Uri("/MainPage.xaml", UriKind.Relative));
        }

        void appBarFavorites_Click(object sender, EventArgs e)
        {
            PhoneApplicationFrame root = Application.Current.RootVisual as PhoneApplicationFrame;
            root.Navigate(new Uri("/pages/Favorites.xaml", UriKind.Relative));
        }

        void appBarControl_Click(object sender, EventArgs e)
        {
            if ((App.GlobalMediaElement.CurrentState == MediaElementState.Playing) || (App.GlobalMediaElement.CurrentState == MediaElementState.Buffering))
                App.GlobalMediaElement.Stop();
            else
                MessageBox.Show("Under Construction");
        }

        void appBarSettings_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Under Construction");
            //PhoneApplicationFrame root = Application.Current.RootVisual as PhoneApplicationFrame;
            //root.Navigate(new Uri("/pages/About.xaml", UriKind.Relative));
        }
        
we cant enable/disable a button from app.xaml also we cant change the button icon from app.xaml
until we write :
        public static ApplicationBar AppBarAPPXAML
        {
            get { return Current.Resources["GlobalApplicationBar"] as ApplicationBar; }
        }
        
        then on any button_click :
    ((ApplicationBarIconButton)App.AppBarAPPXAML.Buttons[2]).IconUri = new Uri("/img/appbar.stop.rest.png", UriKind.Relative);
    ((ApplicationBarIconButton)App.AppBarAPPXAML.Buttons[2]).IsEnabled = true;
        
#at Pages
    //SupportedOrientations="Portrait" Orientation="Portrait"
    //mc:Ignorable="d" d:DesignHeight="768" d:DesignWidth="480"
    //shell:SystemTray.IsVisible="True"
    ApplicationBar="{StaticResource GlobalApplicationBar}">
    
#at Pages Code Enable Disable Buttons :
//http://new.efficientcoder.net/2010/10/windows-phone-7-quick-tip-17.html
	((ApplicationBarIconButton)ApplicationBar.Buttons[0]).IsEnabled = false;