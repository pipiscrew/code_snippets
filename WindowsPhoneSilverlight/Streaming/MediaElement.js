//http://blog.reis.se/post/Enable-background-audio-for-multiple-pages-in-Windows-Phone-7-e28093-Take-2.aspx

		MediaElement MEAudio;

        private void OnMp3Test(object sender, RoutedEventArgs e)
        {
            MEAudio.Stop();
            MEAudio.Source = new Uri("Audio/GreenApple.mp3", UriKind.Relative);
            MEAudio.Play();
        }

        private void OnStreamTest(object sender, RoutedEventArgs e)
        {
            MEAudio.Stop();
            //210mb
            MEAudio.Source = new Uri("http://sverigesradio.se/topsy/direkt/164-hi.mp3", UriKind.Absolute);
            MEAudio.Play();
        }