//https://github.com/cefsharp/CefSharp/blob/master/CefSharp.Example/DownloadHandler.cs

web_view = new ChromiumWebBrowser("http://x.com/");
web_view.DownloadHandler = new DownloadHandler();
.
.
    //used to download file
    public class DownloadHandler : IDownloadHandler
    {
        public bool OnBeforeDownload(DownloadItem downloadItem, out string downloadPath, out bool showDialog)
        {
            downloadPath = downloadItem.SuggestedFileName;
            showDialog = true;
 
            return true;
        }
 
        public bool OnDownloadUpdated(DownloadItem downloadItem)
        {
            return false;
        }
    }