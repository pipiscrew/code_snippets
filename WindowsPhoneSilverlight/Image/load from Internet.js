        private void LoadRADIOlogo(string picURL)
        {
            if (picURL == null)
                imgRADIO.Source = null;
            else
            {
                Uri uri = new Uri(picURL, UriKind.Absolute);
                ImageSource imgSource = new System.Windows.Media.Imaging.BitmapImage(uri);
                imgRADIO.Source = imgSource;
            }
        }