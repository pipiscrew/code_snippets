//http://www.stickler.de/en/information/code-snippets/httpwebrequest-post-data.aspx


using System.Net;
using System.IO;
using System.Web;  // also add a reference to System.web.dll for HttpUtility class to be found

//the call
var keyValues = new Dictionary<string, string>
{
    { "records", h },
    { "statement", "{\"q\": \"" + INSsql + "\"}" },
    {"p",General.Connections[General.activeConnection].password}
};

result= HttpPostRequest(url, keyValues);
        
        
//the proc        
private string HttpPostRequest(string url, Dictionary<string,string> postParameters)
{
    string postData = "";

    foreach (string key in postParameters.Keys)
    {
        postData += HttpUtility.UrlEncode(key) + "="
              + HttpUtility.UrlEncode(postParameters[key]) + "&";
    }

    HttpWebRequest myHttpWebRequest = (HttpWebRequest)HttpWebRequest.Create(url);
    myHttpWebRequest.Method = "POST";
    
    //aboid timeouts!
    //myHttpWebRequest.Timeout = 20 * 60 * 1000;

    byte[] data = Encoding.ASCII.GetBytes(postData);

    myHttpWebRequest.ContentType = "application/x-www-form-urlencoded";
    myHttpWebRequest.ContentLength = data.Length;

    Stream requestStream = myHttpWebRequest.GetRequestStream();
    requestStream.Write(data, 0, data.Length);
    requestStream.Close();

    HttpWebResponse myHttpWebResponse = (HttpWebResponse)myHttpWebRequest.GetResponse();

    Stream responseStream = myHttpWebResponse.GetResponseStream();

    StreamReader myStreamReader = new StreamReader(responseStream, Encoding.Default);

    string pageContent = myStreamReader.ReadToEnd();

    myStreamReader.Close();
    responseStream.Close();

    myHttpWebResponse.Close();

    return pageContent;
}