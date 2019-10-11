
        /// <summary>
        /// Event handler called when user navigates away from this page
        /// </summary>
        protected override void OnNavigatedFrom(NavigationEventArgs args)
        {
            // make sure no item is highlighted in the list of cities
            StationMenu.SelectedIndex = -1;
            StationMenu.SelectedItem = null;
        }