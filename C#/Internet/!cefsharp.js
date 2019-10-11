//http://github.com/cefsharp/CefSharp
//http://www.pipiscrew.com/2015/02/csharp-cefsharp-hints/

***your first app
	//the browser
	private readonly WebView web_view;
	 
	public Form1()
	{
	    InitializeComponent();
	 
	    web_view = new WebView("http://x.com/", new BrowserSettings());
	    web_view.Dock = DockStyle.Fill;
	    this.Controls.Add(web_view);
	}
 

***how to read the cookies
	.
	.
	//somewhere in form
	            CEF.VisitAllCookies(new webview_cookies());
	.
	.
    class webview_cookies : ICookieVisitor
    {
        public bool Visit(Cookie cookie, int count, int total, ref bool deleteCookie)
        {
            //here you can store the cookie value to a static class
 
            Console.WriteLine(cookie.Name +" = " +  cookie.Value);
 
            return true;
        }
    }
    
    //for PHPSESSID
    class webview_cookies : ICookieVisitor
    {
        public bool Visit(Cookie cookie, int count, int total, ref bool deleteCookie)
        {
            if (cookie.Name.ToUpper() == "PHPSESSID")
            {
                General.php_sessid = cookie.Value;
                return true;
            }
            else
                return false;

            //Console.WriteLine(cookie.Name +" = " +  cookie.Value);
        }
    }
 

***how to disable browser context menu (aka disable view source)
        public Form1()
        {
            InitializeComponent();
			.
			.//init browser
			.
            web_view.MenuHandler = new  webview_menu();
        }
 
    class webview_menu : IMenuHandler
    {
        public bool OnBeforeMenu(IWebBrowser browser)
        {
            return true;
        }
    }
 

***Redirect user to another URL by code
	//where the browser named
	private readonly WebView web_view;
	 
	//on a button
	web_view.Load("http://pipiscrew.com/");
	 
	//or load html via :
	web_view.LoadHtml("<b>Please wait!</b>");
	 
	//reload page and ignore cache
	web_view.Reload(true);