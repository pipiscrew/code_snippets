//http://csharpaspnet.blogspot.com/2008/06/passing-credentials-to-url-when-reading.html
// Using System.Net.WebClient

WebClient webClient = new WebClient();

webClient.Credentials = new NetworkCredential("userName", "password");

// I set my proxy with webProxy method and use it if needed

//webClient.Proxy = this.webProxy;

using (Stream stream = webClient.OpenRead(url))

{

using (StreamReader reader = new StreamReader(stream))

{

string response = reader.ReadToEnd();

return response;

}

}

// Using System.Net.HttpWebRequest

HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(url);

request.Credentials = new NetworkCredential("userName", "password");

// I set my proxy with webProxy method and use it if needed

//request.Proxy = this.webProxy;

using (Stream stream = request.GetResponse().GetResponseStream())

{

using (StreamReader reader = new StreamReader(stream))

{

string response = reader.ReadToEnd();

return response;

}
}