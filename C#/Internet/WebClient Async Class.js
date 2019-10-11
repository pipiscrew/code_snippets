using System;
using System.Text;
using System.Net;

namespace WindowsFormsApplication1
{
    class WebREQ
    {
       public delegate void URL(string Result , string URL,Boolean isValid);
       public event URL downloadSTR;

        private string URLposted = null;

        public void SendTO(string targetURL, string CREDENTIALS, string POSTDATA)
        {
            URLposted = targetURL;
            using (WebClient asyncWebRequest = new WebClient())
            {
                asyncWebRequest.DownloadDataCompleted += asyncWebRequest_DownloadDataCompleted;
                Uri urlToRequest = new Uri(targetURL);
                asyncWebRequest.Headers.Set(HttpRequestHeader.Accept, "application/xml");
                asyncWebRequest.Headers.Add("Authorization", "Basic " +
                    Convert.ToBase64String(Encoding.ASCII.GetBytes(CREDENTIALS)));
                asyncWebRequest.DownloadDataAsync(urlToRequest);
            }

        }


        void asyncWebRequest_DownloadDataCompleted(object sender, DownloadDataCompletedEventArgs e)
        {
            if (e.Error != null)
            {
                downloadSTR(e.Error.Message, URLposted, false);
                //MessageBox.Show(e.Error.Message);
                return;
            }

            if (e.Result != null && e.Result.Length > 0)
            {
                string downloadedData = Encoding.Default.GetString(e.Result);

                downloadSTR(downloadedData, URLposted, true);
                //MessageBox.Show(downloadedData);
                // do things with data here
            }
            else
            {
                downloadSTR("", URLposted,false);
                //MessageBox.Show("No data was downloaded.");
            }

        }

    }
}

//in form:
private WebREQ URLSpeaker = null;


        private void Form1_Load(object sender, EventArgs e)
        {
            URLSpeaker = new WebREQ();
        }
        
        
        private void button1_Click(object sender, EventArgs e)
        {
            URLSpeaker.downloadSTR += URLread;
            URLSpeaker.SendTO("https://api.catch.com/v1/notes.xml", "zzakari:smXpn!l0", "");
        }
        
        private void URLread(string Result , string URL,Boolean isValid)
        {
        //here we got the result
        }