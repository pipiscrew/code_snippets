    <!-- Application Bar -->
    <phone:PhoneApplicationPage.ApplicationBar>
        <shell:ApplicationBar IsVisible="True" IsMenuEnabled="True">
            <shell:ApplicationBar.Buttons>
                <shell:ApplicationBarIconButton Text="Save" IconUri="/img/appbar.save.rest.png" Click="appBarSave_Click" />
                <shell:ApplicationBarIconButton Text="Close" IconUri="/img/appbar.close.rest.png" Click="appBarClose_Click" />
            </shell:ApplicationBar.Buttons>
            <shell:ApplicationBar.MenuItems>
                <shell:ApplicationBarMenuItem Text="settings"  Click="appBarSettings_Click"/>
            </shell:ApplicationBar.MenuItems>
        </shell:ApplicationBar>
    </phone:PhoneApplicationPage.ApplicationBar>
    
    
        void appBarSave_Click(object sender, EventArgs e)
        {
            PhoneApplicationFrame root = Application.Current.RootVisual as PhoneApplicationFrame;
            root.Navigate(new Uri("/MainPage.xaml", UriKind.Relative));
        }

        void appBarClose_Click(object sender, EventArgs e)
        {
            NavigationService.GoBack();
        }