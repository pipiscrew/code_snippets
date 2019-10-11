private HttpWebRequest CreateSessionRequest(NetworkCredential networkCredential)
{
CookieContainer cookieContainer = new CookieContainer();
HttpWebRequest webRequest = WebRequest.Create(logonUri) as HttpWebRequest;
webRequest.Credentials = networkCredential;
webRequest.PreAuthenticate = true;
webRequest.AllowAutoRedirect = false;
webRequest.Method = "Post";
webRequest.ContentType = "application/x-www-form-urlencoded"
webRequest.Headers.Add("Cookie", "Key=Value");
webRequest.KeepAlive = true;
webRequest.CookieContainer = cookieContainer;
webRequest.Proxy = null;
return webRequest;
}
