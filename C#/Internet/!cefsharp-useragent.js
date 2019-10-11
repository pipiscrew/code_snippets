        //reference - https://github.com/cefsharp/CefSharp/blob/master/CefSharp.Example/CefExample.cs
 
        //the browser
        private readonly ChromiumWebBrowser web_view;
 
        public Form1()
        {
            InitializeComponent();
 
////
            var settings = new CefSettings();
            settings.UserAgent = "pipiscrew_z_v" + Cef.CefSharpVersion;
 
            //the location where cache data will be stored on disk. If empty an in-memory cache will be used
            //http://magpcss.org/ceforum/apidocs3/projects/%28default%29/_cef_settings_t.html#cache_path
            settings.CachePath = Application.StartupPath;
 
            Cef.Initialize(settings);
 
////
            web_view = new ChromiumWebBrowser("http://x.com/");
            web_view.Dock = DockStyle.Fill;
        }