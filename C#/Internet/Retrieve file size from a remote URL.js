//http://www.kunal-chowdhury.com/2015/12/retrieve-file-size.html

private static string GetFileSize(Uri uriPath)
{
    var webRequest = HttpWebRequest.Create(uriPath);
    webRequest.Method = "HEAD";
 
    using (var webResponse = webRequest.GetResponse())
    {
       var fileSize = webResponse.Headers.Get("Content-Length");
       var fileSizeInMegaByte = Math.Round(Convert.ToDouble(fileSize) / 1024.0 / 1024.0, 2);
       return fileSizeInMegaByte + " MB";
    }
}