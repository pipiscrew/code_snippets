                    k = new WebClient();
                    k.DownloadFileAsync(new Uri(t.raw_url), Application.StartupPath + "\\" + dir + "\\" + fl);
                    
                    
//get the filename on complete
       WebClient _downloadClient = new WebClient();        
        _downloadClient.DownloadFileCompleted += DownloadFileCompleted(_filename);
        _downloadClient.DownloadFileAsync(current.url, _filename);
        
       public AsyncCompletedEventHandler DownloadFileCompleted(string filename)
        { 
            Action<object,AsyncCompletedEventArgs> action = (sender,e) =>
            {
                var _filename = filename;

                if (e.Error != null)
                {
                    throw e.Error;
                }
                if (!_downloadFileVersion.Any())
                {
                    complited = true;
                }
                DownloadFile();
            };
            return new AsyncCompletedEventHandler(action);
        }