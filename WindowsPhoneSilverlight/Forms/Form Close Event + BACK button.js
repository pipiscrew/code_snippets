        protected override void OnNavigatedFrom(System.Windows.Navigation.NavigationEventArgs e)
        {
            p.IsOpen = false;
        }


#identify the BACK button
//http://stackoverflow.com/questions/5550176/handling-tombstoning-and-back-key-properly-for-performance-reasons
        protected override void OnNavigatingFrom(System.Windows.Navigation.NavigatingCancelEventArgs e)
        {
            // when navigating back
            if (e.NavigationMode == System.Windows.Navigation.NavigationMode.Back)
            {
                ((ApplicationBarIconButton)ApplicationBar.Buttons[0]).IsEnabled = true;
            }
        }