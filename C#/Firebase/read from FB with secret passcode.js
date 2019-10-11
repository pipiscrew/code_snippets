//we using as is the firebase secret - no JWT
//when using firebase secret there is no rules restrictions

            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create("https://contests.firebaseio.com/competitions/-JDtoBb_6fA411TyZQ9C/.json?auth=dHQkvzeRv5ZGRYWGogRQeojicEq3GRsVMjZxWrZ4");

            request.Method = "GET";

            request.ContentType = "application/json";

            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            string target;
            try
            {
                StreamReader streamReader = new StreamReader(response.GetResponseStream(), true);
                try
                {
                    target = streamReader.ReadToEnd();
                }
                finally
                {
                    streamReader.Close();
                }
            }
            finally
            {
                response.Close();
            }

            textBox1.Text = target;