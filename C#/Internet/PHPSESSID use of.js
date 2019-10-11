//login
private void button1_Click(object sender, EventArgs e)
{
    //http://stackoverflow.com/a/931030
 
    // NOTE: This is the URL the form POSTs to, not the URL of the form (you can find this in the "action" attribute of the HTML's form tag
    string formUrl = "http://www.x.com/api/login.php";
    string formParams = string.Format("email={0}&pass={1}&submit={2}", "c@x.com", "543654364", "test");
    string cookieHeader;
    WebRequest req = WebRequest.Create(formUrl);
    req.ContentType = "application/x-www-form-urlencoded";
    req.Method = "POST";
    byte[] bytes = Encoding.ASCII.GetBytes(formParams);
    req.ContentLength = bytes.Length;
    using (Stream os = req.GetRequestStream())
    {
        os.Write(bytes, 0, bytes.Length);
    }
    WebResponse resp = req.GetResponse();
    cookieHeader = resp.Headers["Set-cookie"];
    Console.WriteLine(cookieHeader); //read PHPSESSID
 
    StreamReader sr = new StreamReader(resp.GetResponseStream());
    Console.WriteLine(sr.ReadToEnd()); //read RESPONSE
}


//use of PHPSESSID, not adapted to example above^
    public static class General
    {
        public static string php_sessid = null;

        public static string get_appoitnments(string url)
        {
            if (php_sessid == null)
                return "0";

            string pageSource;
            string getUrl = url;
            WebRequest getRequest = WebRequest.Create(getUrl);
            getRequest.Method = "POST"; //we can make a POST request!
            //must be as example #PHPSESSID=assssbj6tb30ljttm4q4olpjn0#, warning no spaces!
            getRequest.Headers["Cookie"] = "PHPSESSID=" + php_sessid;
           // working also - getRequest.Headers.Add("Cookie",  "PHPSESSID=" + php_sessid);
            WebResponse getResponse = getRequest.GetResponse();
            using (StreamReader sr = new StreamReader(getResponse.GetResponseStream()))
            {
                pageSource = sr.ReadToEnd();
            }

            return pageSource;
        }
    }
    
 
//POST JSON GET RESULT BY PHP - frm4 - System.Web.Extensions.dll
//^not adapted
		var keyValues = new Dictionary<string, string>
               {
                   { "type", "1" },
                   { "reason", reason }
               };
               
       public static string get_request_with_params_and_phpsessid(string url, Dictionary<string, string> keyValues)
        {
            if (php_sessid == null)
                return "0";


            JavaScriptSerializer js = new JavaScriptSerializer();
            string json = js.Serialize(keyValues);

            using (var wb = new WebClient())
            {
                wb.Headers.Add("Cookie", "PHPSESSID=" + php_sessid);

                var parameters = new NameValueCollection();
                parameters["vars"] = json;

                var response = wb.UploadValues(url, "POST", parameters);
                Console.WriteLine( Encoding.UTF8.GetString(response));
                return (Encoding.UTF8.GetString(response));
            }

        }