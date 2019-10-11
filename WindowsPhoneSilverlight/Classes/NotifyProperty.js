//the declaration should be 
public class RadioListItem : INotifyPropertyChanged

//these needed to included on the class
        /// <summary>
        /// Helper to raise the PropertyChanged event
        /// </summary>
        /// <param name="property">The property name</param>
        void OnPropertyChanged(string property)
        {
            var handler = PropertyChanged;
            if (handler != null)
                Deployment.Current.Dispatcher.BeginInvoke(() => handler(this, new PropertyChangedEventArgs(property)));
        }

        // Standard event from INotifyPropertyChanged
        public event PropertyChangedEventHandler PropertyChanged;