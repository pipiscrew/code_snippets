//http://dennisdel.com/?p=528
        private void button2_Click(object sender, RoutedEventArgs e)
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create("http://173.192.58.37:8226");

            request.AllowReadStreamBuffering = false;
            request.Method = "GET";
            request.BeginGetResponse(new AsyncCallback(GetShoutAsync), request);
        }

        void GetShoutAsync(IAsyncResult res)
        {
            HttpWebRequest request = (HttpWebRequest)res.AsyncState;
            HttpWebResponse response = (HttpWebResponse)request.EndGetResponse(res);
            Stream r = response.GetResponseStream();

            byte[] data = new byte[4096];
            int read;

            while ((read = r.Read(data, 0, data.Length)) > 0)
            {
                System.Diagnostics.Debug.WriteLine(Encoding.UTF8.GetString(data, 0, 4096));
                //System.Diagnostics.Debug.WriteLine(data[0]);
            }
        }