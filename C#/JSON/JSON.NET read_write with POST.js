//http://port135.com/2014/01/25/json-readwrite-operations-with-a-remote-server-using-http-post-in-c/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.IO;
using Newtonsoft.Json;
 
public class jsonClass
{
    public void jsonOps()
    {
        // Preparing Json object to send to the remote server
        jsonLogin li = new jsonLogin();
        li.username = "your-username";
        li.password = "your-password";
        string jLoginString = JsonConvert.SerializeObject(li);
 
        // Create HTTP POST request
        var httpWebRequest = (HttpWebRequest)WebRequest.Create("https://www.youraddress.com");
        httpWebRequest.ContentType = "application/json";
        httpWebRequest.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;
        httpWebRequest.Accept = "application/json";
        httpWebRequest.Method = "POST";
 
        string output = "";
 
        // Connecting to the server. Sending request and receiving response
        using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
        {
            streamWriter.Write(jLoginString);
            streamWriter.Flush();
            streamWriter.Close();
 
            var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                output = streamReader.ReadToEnd();
            }
        }
 
        // Reading JSON response
        JsonTextReader reader = new JsonTextReader(new StringReader(output));
        while (reader.Read())
        {
            if (reader.Value != null)
            {
                textBox1.Text = reader.Value;
            }
            else
            {
                // No value exception block
            }
        }
    }
}
 
public class jsonLogin
{
    public string username = "";
    public string password = "";
}