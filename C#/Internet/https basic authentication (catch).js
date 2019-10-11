//http://support.recurly.com/discussions/support/101-401-when-authenticating-a-request-in-net-passing-in-xml

            System.Net.WebClient wc = new System.Net.WebClient();
            wc.Headers.Set(HttpRequestHeader.Accept, "application/xml");
            wc.Headers.Add("Authorization", "Basic " +
                Convert.ToBase64String(Encoding.ASCII.GetBytes("zzakari:smXpn!l0")));

           using (Stream stream = wc.OpenRead("https://api.catch.com/v1/notes.xml"))

{

using (StreamReader reader = new StreamReader(stream))

{

string response = reader.ReadToEnd();
MessageBox.Show(response);
}

}