//http://www.byteblocks.com/post/2010/03/10/How-to-use-HttpWebRequest-to-send-POST-request-to-another-web-server-in-Silverlight.aspx

        private void button1_Click(object sender, RoutedEventArgs e)
        {
            // Prepare web request...
            HttpWebRequest myRequest =
            (HttpWebRequest)WebRequest.Create("http://scfire-dtc-aa06.stream.aol.com:80/stream/1009");
            myRequest.Method = "POST";
            myRequest.ContentType = "application/x-www-form-urlencoded";
            myRequest.BeginGetRequestStream(new AsyncCallback(GetRequestStreamCallback), myRequest);

        }

        private void GetRequestStreamCallback(IAsyncResult asynchronousResult)
        {
            HttpWebRequest request = (HttpWebRequest)asynchronousResult.AsyncState;
            System.IO.Stream postStream = request.EndGetRequestStream(asynchronousResult);
            string strId = "My Id";
            string strName = "My Name";
            string postData = "userid=" + strId;
            postData += ("&username=" + strName);
            byte[] byteArray = System.Text.Encoding.UTF8.GetBytes(postData);
            // Write to the request stream.
            postStream.Write(byteArray, 0, postData.Length);
            postStream.Close();
            // Start the asynchronous operation to get the response
            request.BeginGetResponse(new AsyncCallback(GetResponseCallback), request);
        }

        private void GetResponseCallback(IAsyncResult asynchronousResult)
        {
            HttpWebRequest request = (HttpWebRequest)asynchronousResult.AsyncState;
            HttpWebResponse response = (HttpWebResponse)request.EndGetResponse(asynchronousResult);
            Stream streamResponse = response.GetResponseStream();
            StreamReader streamRead = new StreamReader(streamResponse);
            string responseString = streamRead.ReadToEnd();
            // Close the stream object
            streamResponse.Close();
            streamRead.Close();
            // Release the HttpWebResponse
            response.Close();
            Action<string> act = new Action<string>(DisplayResponse);
            this.Dispatcher.BeginInvoke(act, responseString);
        }

        void DisplayResponse(string msg)
        {
           MessageBox.Show( msg);
        }