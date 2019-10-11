using System.Windows.Navigation;


 private DispatcherTimer _dispatcherTimer;
 
 //something like Form_Load
         protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            _dispatcherTimer = new DispatcherTimer { Interval = TimeSpan.FromSeconds(1) };
            _dispatcherTimer.Tick += UpdateMediaData;
            _dispatcherTimer.Start();
        }

        private void UpdateMediaData(object sender, EventArgs e)
        {
            if (MEAudio.Source == null) return;
            string result = "BUFFER\n";
            result += "progress:" + MEAudio.BufferingProgress + "\n";
            result += "time:" + MEAudio.BufferingTime + "\n";

            result += "STREAM\n";
            result += "Position:" + MEAudio.Position + "\n";
            result += "State:" + MEAudio.CurrentState + "\n";
            result += "Duration:" + MEAudio.NaturalDuration + "\n";
            
            MediaElementData.Text = result;
        }