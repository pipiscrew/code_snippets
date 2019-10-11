       private void button1_Click(object sender, RoutedEventArgs e)
        {
         var request = HttpWebRequest.Create("http://google.com") as HttpWebRequest;
            request.Accept = "application/json";
            request.Headers["Compress-data"] = "true";
            request.BeginGetResponse(RequestCallback, request);
        }

        private void RequestCallback(IAsyncResult result)
        {
            var request = result.AsyncState as HttpWebRequest;
            var response = request.EndGetResponse(result);
            using (var strm = response.GetResponseStream())
            using (var reader = new StreamReader(strm))
            {
                var data = reader.ReadToEnd();
                // data will be compressed
            }
        }