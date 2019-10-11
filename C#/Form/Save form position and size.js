//http://www.bpsoftware.com/blog/post/2011/11/17/C-Save-a-Form%E2%80%99s-Size-and-Location.aspx

   private void Form_Load(object sender, EventArgs e)
    {
        this.WindowState = (FormWindowState)FormWindowState.Parse(WindowState.GetType(), Application.UserAppDataRegistry.GetValue("WindowState", FormWindowState.Normal).ToString());
        if (this.WindowState == FormWindowState.Normal)
        {
            int x = (int)Application.UserAppDataRegistry.GetValue("LocationX");
            int y = (int)Application.UserAppDataRegistry.GetValue("LocationY");
            this.DesktopLocation = new Point(x, y);
            int w = (int)Application.UserAppDataRegistry.GetValue("WindowSizeW");
            int h = (int)Application.UserAppDataRegistry.GetValue("WindowSizeH");
            this.Size = new Size(w, h);
        }
    }
 
    private void Form_FormClosing(object sender, FormClosingEventArgs e)
    {
        Application.UserAppDataRegistry.SetValue("WindowState", this.WindowState);
        Application.UserAppDataRegistry.SetValue("WindowSizeH", this.Size.Height);
        Application.UserAppDataRegistry.SetValue("WindowSizeW", this.Size.Width);
        Application.UserAppDataRegistry.SetValue("LocationX", this.DesktopLocation.X);
        Application.UserAppDataRegistry.SetValue("LocationY", this.DesktopLocation.Y);
    }