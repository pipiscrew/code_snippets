//http://forums.create.msdn.com/forums/t/56306.aspx
            MediaPlayerLauncher mpl = null;
            mpl = new MediaPlayerLauncher();
            mpl.Location = MediaLocationType.Install;
            mpl.Media = new Uri("http://localhost/2.mp3"); //        http://scfire-dtc-aa06.stream.aol.com:80/stream/1009", UriKind.Absolute);
            mpl.Controls = MediaPlaybackControls.Pause | MediaPlaybackControls.Stop;
            mpl.Show();