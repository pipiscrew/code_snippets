private void frmTest_Load(object sender, EventArgs e)
{
    this.Enabled = false;
    webBrowser1.Navigate("http://thepage.com");
    webBrowser1.DocumentCompleted += webBrowser1_DocumentCompleted;
    timer1.Interval = 100;
}

private void webBrowser1_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e)
{
    //http://stackoverflow.com/a/7801574
    //inject JS to current page, and execute it!!
    
    //check a checkbox - via jQuery (already loaded by the original page, otherwise use plain js)
    var jsCode = "$(\"#chk_goal\").prop('checked',true);";
    webBrowser1.Document.InvokeScript("execScript", new Object[] { jsCode, "JavaScript" });
	
	//checkbox is checked here ;)
	
	//execute a mouse click to the page
    timer1.Enabled = true;
}

//make a click to an element - macro style
private void timer1_Tick(object sender, EventArgs e)
{
    timer1.Enabled = false;
    Cursor.Position = new System.Drawing.Point(webBrowser1.Location.X + this.Location.X + 550, webBrowser1.Location.Y + this.Location.Y + 270);

    //http://stackoverflow.com/a/2416762
    int X = Cursor.Position.X;
    int Y = Cursor.Position.Y;
    mouse_event(MOUSEEVENTF_LEFTDOWN | MOUSEEVENTF_LEFTUP, X, Y, 0, 0);

   // this.WindowState = FormWindowState.Maximized;
    this.Enabled = true;
}

//mouse click
[DllImport("user32.dll", CharSet = CharSet.Auto, CallingConvention = CallingConvention.StdCall)]
public static extern void mouse_event(uint dwFlags, int dx, int dy, uint cButtons, uint dwExtraInfo);

private const int MOUSEEVENTF_LEFTDOWN = 0x02;
private const int MOUSEEVENTF_LEFTUP = 0x04;
private const int MOUSEEVENTF_RIGHTDOWN = 0x08;
private const int MOUSEEVENTF_RIGHTUP = 0x10;

//////clear cache
[DllImport("wininet.dll", SetLastError = true)]
private static extern long DeleteUrlCacheEntry(string lpszUrlName);

private void webBrowser1_Navigating(object sender, WebBrowserNavigatingEventArgs e)
{
    Console.WriteLine(e.Url.ToString());
    DeleteUrlCacheEntry(e.Url.ToString());
}

private void frmTickets_Load(object sender, EventArgs e)
{
    //WebBrowserHelper.ClearCache();
    DeleteUrlCacheEntry("http://thepage.com");
    this.Enabled = false;
    webBrowser1.Navigate("http://thepage.com");
    webBrowser1.DocumentCompleted += webBrowser1_DocumentCompleted;
    timer1.Interval = 100;
}