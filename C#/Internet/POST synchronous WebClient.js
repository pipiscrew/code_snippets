//1st way
			//string response=null
            using (var wb = new WebClient())
            {
                var parameters = new NameValueCollection();
                parameters["sql"] = "{\"q\": \"" + General.SafeJSON(sql) + "\"}";
                parameters["p"] = General.Connections[ConnIndex].password;

                var response = wb.UploadValues(General.Connections[ConnIndex].serverName, "POST", parameters);
                return Encoding.UTF8.GetString(response);
                //responsoe = Encoding.UTF8.GetString(response);
            }










//2nd way - http://www.daniweb.com/software-development/csharp/threads/425295/read-post-values-from-c-windows-form-with-php
//the class
    class WebPostRequest
    {
        WebRequest theRequest;
        HttpWebResponse theResponse;
        ArrayList theQueryData;

        public WebPostRequest(string url)
        {
            theRequest = WebRequest.Create(url);
            theRequest.Method = "POST";
            theQueryData = new ArrayList();
        }

        public void Add(string key, string value)
        {
            theQueryData.Add(String.Format("{0}={1}", key, HttpUtility.UrlEncode(value)));
        }

        public string GetResponse()
        {
            // Set the encoding type
            theRequest.ContentType = "application/x-www-form-urlencoded";

            // Build a string containing all the parameters
            string Parameters = String.Join("&", (String[])theQueryData.ToArray(typeof(string)));
            theRequest.ContentLength = Parameters.Length;

            // We write the parameters into the request
            StreamWriter sw = new StreamWriter(theRequest.GetRequestStream());
            sw.Write(Parameters);
            sw.Close();

            // Execute the query
            theResponse = (HttpWebResponse)theRequest.GetResponse();
            StreamReader sr = new StreamReader(theResponse.GetResponseStream());
            return sr.ReadToEnd();
        }

    }
    
//the call
                WebPostRequest myPost = new WebPostRequest("http://localhost/sensor.php");
                myPost.Add("keyword", "void");
                myPost.Add("data", "hello&+-[]");
                Console.WriteLine(myPost.GetResponse());
                Console.ReadLine();