//http://social.msdn.microsoft.com/Forums/en/windowsphone7series/thread/ed07aaba-5bbe-4cc7-b008-67fa87a83ace
//http://blogs.msdn.com/b/giuseppeguerrasio/archive/2010/12/06/using-smooth-streaming-media-element-for-windows-phone-7.aspx

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Shapes;
using Microsoft.Phone.Controls;
using System.IO;

namespace TestHttpStreaming
{
  public partial class MainPage : PhoneApplicationPage
  {
    public MainPage()
    {
      InitializeComponent();

      SupportedOrientations = SupportedPageOrientation.Portrait | SupportedPageOrientation.Landscape;
    }

    Uri uri = null;
    HttpWebRequest request = null;
    byte[] buffer = new byte[1024];
    Stream stream = null;
    private void button1_Click(object sender, RoutedEventArgs e)
    {
      uri = new Uri("http://stream.twitter.com/1/statuses/sample.json?delimited=length", UriKind.Absolute);
      request = (HttpWebRequest)WebRequest.Create(uri);
      request.Method = "GET";
      request.Credentials = new NetworkCredential("[username]", "[password]");
      request.BeginGetResponse(new AsyncCallback(this.EndGetResponseStream), null);
    }
    void EndGetResponseStream(IAsyncResult result)
    {
      try
      {
        HttpWebResponse response = (HttpWebResponse)request.EndGetResponse(result);
        stream = response.GetResponseStream();
        IAsyncResult iarRead = stream.BeginRead(buffer, 0, 1024, new AsyncCallback(StreamingReadCallBack), null);
      }
      finally
      {
      }
    }
    private void StreamingReadCallBack(IAsyncResult asyncResult)
    {
      int read = stream.EndRead(asyncResult);
    }
  }
}
