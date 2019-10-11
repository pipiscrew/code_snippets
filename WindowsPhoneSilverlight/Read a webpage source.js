        HttpWebRequest request;
        WebResponse response;
        private void button1_Click(object sender, RoutedEventArgs e)
        {
            request = WebRequest.Create(@"http://google.com") as HttpWebRequest;
            request.BeginGetResponse(AfterRequest, null);
        }


        private void AfterRequest(IAsyncResult result)
        {
            response = request.EndGetResponse(result);
            using (StreamReader sd = new StreamReader(response.GetResponseStream()))
            {
                string resultString = sd.ReadToEnd();
            }
            response.Close();
        }