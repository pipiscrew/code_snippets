HTTPRequest request = new HTTPRequest("http://x.com/testAREA/lic.php", "POST", "e=x@x.com&s=111-111-111");

if (request.GetResponse() == genLicenseVerification("x@x.com", "111-111-111"))
    MessageBox.Show("Success");
else
    MessageBox.Show("Wrong");
            
public class HTTPRequest
{
    // Fields
    private Stream dataStream;
    private WebRequest request;
    private string status;

    // Methods
    public HTTPRequest(string url)
    {
        this.request = WebRequest.Create(url);
    }

    public HTTPRequest(string url, string method) : this(url)
    {
        if (!method.Equals("GET") && !method.Equals("POST"))
        {
            throw new Exception("Invalid Method Type");
        }
        this.request.Method = method;
    }

    public HTTPRequest(string url, string method, string data) : this(url, method)
    {
        string s = data;
        byte[] bytes = Encoding.UTF8.GetBytes(s);
        this.request.ContentType = "application/x-www-form-urlencoded";
        this.request.ContentLength = bytes.Length;
        this.dataStream = this.request.GetRequestStream();
        this.dataStream.Write(bytes, 0, bytes.Length);
        this.dataStream.Close();
    }

    public string GetResponse()
    {
        WebResponse response = this.request.GetResponse();
        this.Status = ((HttpWebResponse) response).StatusDescription;
        this.dataStream = response.GetResponseStream();
        StreamReader reader = new StreamReader(this.dataStream);
        string str = reader.ReadToEnd();
        reader.Close();
        this.dataStream.Close();
        response.Close();
        return str;
    }

    // Properties
    public string Status
    {
        get
        {
            return this.status;
        }
        set
        {
            this.status = value;
        }
    }
}

