//http://www.codeproject.com/KB/cs/SeansDownloader.aspx?msg=3892649#xx3892649xx
namespace SimpleDownloader
{
    class Downloader
    {
        public const string HttpUserAgent = "Sean's Agent/1.0 " + 
        "(compatible; SA 1.0; Windows NT 6.0; SLCC1;" +
        " .NET CLR 2.0.50727; .NET CLR 3.0.04506; .NET CLR 1.1.4322;";
        CookieContainer httpCookie;
 
        public byte[] ConnectAndDownloadURL(string siteURL)
        {
            HttpWebRequest httpRequest = null;
            HttpWebResponse httpResponse = null;
            byte[] httpHeaderData = null;
            byte[] httpData = null;

            httpRequest = (HttpWebRequest)WebRequest.Create(siteURL);

            //we check to see if it's the first time 
            //we're connecting so we can save the cookie
            //otherwise we use the existing cookie
            if (Downloader.IsFirstConnection)
            {
                httpCookie = new CookieContainer();
                Downloader.IsFirstConnection = false;
            }
 
            httpRequest.CookieContainer = httpCookie;
            httpRequest.AllowAutoRedirect = true;
            httpRequest.UserAgent = Downloader.HttpUserAgent;

            try
            {
                httpResponse = (HttpWebResponse)httpRequest.GetResponse();
                if (httpResponse.StatusCode == HttpStatusCode.OK)
                {
                    httpCookie = httpRequest.CookieContainer;
                    httpHeaderData = httpResponse.Headers.ToByteArray();
                    Stream httpContentData = httpResponse.GetResponseStream();
                    using (httpContentData)
                    {
                        // Now you can do what ever you want with the data here.
                        // i.e. convert it, parse it etc. You can write stuff to httpData
                    }
                    return httpData;
                }
                else
                {
                    //Report error 
                    return null;
                }
            }
            catch (WebException we)
            {
                //Report error
            }
            finally
            {
                if (httpResponse != null)
                {
                    httpResponse.Close();
                }
 
            }
        }
    }
}