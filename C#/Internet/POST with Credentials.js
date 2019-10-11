//http://www.west-wind.com/weblog/posts/51891.aspx
//http://www.west-wind.com/presentations/dotnetWebRequest/dotnetWebRequest.htm
public static byte[] Execute(string url, int timeout, string userName, string domain, string password)
{
    if(String.IsNullOrEmpty(url))
    {
        throw new ArgumentNullException("url");
    }

    HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(url);
    
    //use for login
	CredentialCache cache = new CredentialCache();
	cache.Add(request.RequestUri, "NTLM", new NetworkCredential(userName, password, domain));
	cache.Add(request.RequestUri, "Digest", new NetworkCredential(userName, password, domain));
	request.Credentials = cache;
	//use for login

    request.Timeout = timeout;
    request.UserAgent = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; InfoPath.1; .NET CLR 2.0.50727; .NET CLR 1.1.4322)";
    if(!String.IsNullOrEmpty(userName))
    {
        request.Credentials = new NetworkCredential(userName, password, domain);
    }

    WebResponse response = null;
    Stream stream = null;
    try
    {
        response = request.GetResponse();
        stream = response.GetResponseStream();

        List<byte> bytes = new List<byte>();
        int b = -1;
        while((b = stream.ReadByte()) != -1)
        {
            bytes.Add((byte)b);
        }

        return bytes.ToArray();
    }
    finally
    {
        if(response != null)
        {
            response.Close();
        }
        if(stream != null)
        {
            stream.Close();
            stream.Dispose();
        }
    }
}