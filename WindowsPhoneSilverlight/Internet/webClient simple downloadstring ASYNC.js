        private void button1_Click(object sender, RoutedEventArgs e)
        {
            var webClient = new WebClient();

            webClient.OpenReadAsync(new Uri("http://api.shoutcast.com/genre/primary?k=sh1wZ4XAb_b9i9ry&f=json"));
            webClient.OpenReadCompleted += new OpenReadCompletedEventHandler(webClient_OpenReadCompleted);
        }

        void webClient_OpenReadCompleted(object sender, OpenReadCompletedEventArgs e)
        {

            using (var reader = new StreamReader(e.Result))
            {
                MessageBox.Show(reader.ReadToEnd());
            }
        }