//button1 (afte login, user click the button and can get the phpsessionid from browser 
//to webrequest and make extra queries
    get_appointments_via_phpsessid d = new get_appointments_via_phpsessid();
    d.sendMessage += new EventHandler<MyEventArgs>(check_appointments);

    //get PHPSESSIONID
    CEF.VisitAllCookies(d);
                

//INTERFACE
    //used to read cookies
    class get_appointments_via_phpsessid : ICookieVisitor
    {
        public bool Visit(Cookie cookie, int count, int total, ref bool deleteCookie)
        {
            if (cookie.Name.ToUpper() == "PHPSESSID")
            {
                General.php_sessid = cookie.Value;
											//synchronous - get PHP result
                List<appointment_item> x =  General.get_appointments();

                if (sendMessage != null)
                    sendMessage(this, new MyEventArgs(x, false));

                return true;
            }
            else
                return false;
        }

        public event EventHandler<MyEventArgs> sendMessage;
    }

//CUSTOM EVENT    
    public class MyEventArgs : EventArgs
    {
        // ... your event args properties and methods here...
        public List<appointment_item> appointments { get; set; }
        public bool isWarning { get; set; }

        public MyEventArgs(List<appointment_item> message, bool iswarning)
        {
            appointments = message;
            isWarning = iswarning;
        }

    }
    
    
//GENERAL
    public static class General
    {
        public static string php_sessid = null;
        public static EventHandler myEvent_Completed;

        private static string get_request_with_phpsessid(string url)
        {
            if (php_sessid == null)
                return "0";

            string pageSource;
            WebRequest getRequest = WebRequest.Create(url);
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

        public static List<appointment_item> get_appointments()
        {
            string x = get_request_with_phpsessid("http://x.com/logout_get_appointments.php");

            List<appointment_item> recs = null;

            JavaScriptSerializer oSerializer = new JavaScriptSerializer();
            recs = oSerializer.Deserialize<List<appointment_item>>(x);

            if (recs == null)
                return new  List<appointment_item>(); 
                
            return recs;
        }


    }

    
//https://github.com/cefsharp/CefSharp/issues/826
//Here's an example I made for the CefSharp3 WinForms example that waits until all cookies are collected and then shows them as a message box (should be similar for CefSharp1 or WPF):

        private void ViewAllCookiesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            var visitor = new CookieMonster(all_cookies => {
                var sb = new StringBuilder();
                foreach (var nameValue in all_cookies)
                    sb.AppendLine(nameValue.Item1 + " = " + nameValue.Item2);
                BeginInvoke(new MethodInvoker(() => {
                    MessageBox.Show(sb.ToString());
                }));
            });
            Cef.VisitAllCookies(visitor);
        }

        class CookieMonster : ICookieVisitor
        {
            readonly List<Tuple<string, string>> cookies = new List<Tuple<string, string>>();
            readonly Action<IEnumerable<Tuple<string, string>>> useAllCookies;

            public CookieMonster(Action<IEnumerable<Tuple<string, string>>> useAllCookies)
            {
                this.useAllCookies = useAllCookies;
            }

            public bool Visit(Cookie cookie, int count, int total, ref bool deleteCookie)
            {
                cookies.Add(new Tuple<string, string>(cookie.Name, cookie.Value));

                if (count == total - 1)
                    useAllCookies(cookies);

                return true;
            }
        }
        
//Here's another version that doesn't work asynchronously, and just blocks the main thread till all cookies are collected:

        private void ViewAllCookiesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            var visitor = new CookieMonster();
            if (Cef.VisitAllCookies(visitor))
                visitor.WaitForAllCookies();
            var sb = new StringBuilder();
            foreach (var nameValue in visitor.NamesValues)
                sb.AppendLine(nameValue.Item1 + " = " + nameValue.Item2);
            MessageBox.Show(sb.ToString());
        }

        class CookieMonster : ICookieVisitor
        {
            readonly List<Tuple<string, string>> cookies = new List<Tuple<string, string>>();
            readonly ManualResetEvent gotAllCookies = new ManualResetEvent(false);

            public bool Visit(Cookie cookie, int count, int total, ref bool deleteCookie)
            {
                cookies.Add(new Tuple<string, string>(cookie.Name, cookie.Value));

                if (count == total - 1)
                    gotAllCookies.Set();

                return true;
            }

            public void WaitForAllCookies()
            {
                gotAllCookies.WaitOne();
            }

            public IEnumerable<Tuple<string, string>> NamesValues
            {
                get { return cookies; }
            }
        }