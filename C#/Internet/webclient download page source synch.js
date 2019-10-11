        private string getPageSource(string url)
        {
            WebClient web = new WebClient();
            web.Encoding = Encoding.UTF8;
            return web.DownloadString(url);
        }
        
web.Headers.Add("Referer", "http://xx.to/");
web.Headers.Add("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.0.3705;)");