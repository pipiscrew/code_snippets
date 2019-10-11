//v39
        //the browser
        private readonly ChromiumWebBrowser web_view;
        
        public Form1()
        {
            InitializeComponent();
			
			//required
			Cef.Initialize(new CefSettings());
			
            web_view = new ChromiumWebBrowser("http://x.com/api/");
            web_view.FrameLoadEnd += new EventHandler<FrameLoadEndEventArgs>(web_view_FrameLoadEnd); //+= new LoadCompletedEventHandler(web_view_LoadCompleted);
            web_view.Dock = DockStyle.Fill;
            panel1.Controls.Add(web_view);
        }


        void web_view_FrameLoadEnd(object sender, FrameLoadEndEventArgs e)
        {
            if (e.Url.ToLower().StartsWith("https://www.x.com/login.php?skip_api_login"))
            {
                web_view.ExecuteScriptAsync("document.getElementById('email').value=" + '\'' + General.login_name + '\'');
                web_view.ExecuteScriptAsync("document.getElementById('pass').value=" + '\'' + General.login_password + '\'');
                web_view.ExecuteScriptAsync("document.getElementById('login_form').submit();");
            }
        }
        
//v1.25
        //the browser
        private readonly WebView web_view;
        

        public Form1()
        {
            InitializeComponent();

            web_view = new WebView("http://x.com/api/", new BrowserSettings());
            web_view.LoadCompleted += new LoadCompletedEventHandler(web_view_LoadCompleted);
            web_view.Dock = DockStyle.Fill;
            this.Controls.Add(web_view);
        }
        

        void web_view_LoadCompleted(object sender, LoadCompletedEventArgs url)
        {
            if (url.Url.ToLower().StartsWith("https://www.facebook.com/login.php?skip_api_login"))
            {
                web_view.ExecuteScript("document.getElementById('email').value=" + '\'' + General.login_name + '\'');
                web_view.ExecuteScript("document.getElementById('pass').value=" + '\'' + General.login_password + '\'');
                web_view.ExecuteScript("document.getElementById('login_form').submit();");
                //web_view.ExecuteScript("document.getElementsByName('login').click()");
            }
        }
        
        
//ex2 - intercept links
//https://github.com/cefsharp/CefSharp/search?q=OnBeforeBrowse&type=Code
        public Form1()
        {
            InitializeComponent();

            web_view = new WebView("http://x.com/api/", new BrowserSettings());
            web_view.LoadCompleted += new LoadCompletedEventHandler(web_view_LoadCompleted);
            web_view.Dock = DockStyle.Fill;
            this.Controls.Add(web_view);
            	
            web_view.RequestHandler = new get_link();
        }
        
   //intercept link
    class get_link : IRequestHandler
    {
        public bool GetAuthCredentials(IWebBrowser browser, bool isProxy, string host, int port, string realm, string scheme, ref string username, ref string password)
        {
            throw new NotImplementedException();
        }

        public bool GetDownloadHandler(IWebBrowser browser, string mimeType, string fileName, long contentLength, ref IDownloadHandler handler)
        {
            throw new NotImplementedException();
        }

        /// <returns>Return true to cancel the navigation or false to allow the navigation to proceed.</returns>
        public bool OnBeforeBrowse(IWebBrowser browser, IRequest request, NavigationType naigationvType, bool isRedirect)
        {
            Console.WriteLine(request.Url);

            return false;
        }

        public bool OnBeforeResourceLoad(IWebBrowser browser, IRequestResponse requestResponse)
        {
            throw new NotImplementedException();
        }

        public void OnResourceResponse(IWebBrowser browser, string url, int status, string statusText, string mimeType, WebHeaderCollection headers)
        {
            throw new NotImplementedException();
        }
    }