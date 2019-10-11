        //mouse click
        [DllImport("user32.dll", CharSet = CharSet.Auto, CallingConvention = CallingConvention.StdCall)]
        public static extern void mouse_event(uint dwFlags, int dx, int dy, uint cButtons, uint dwExtraInfo);

        private const int MOUSEEVENTF_LEFTDOWN = 0x02;
        private const int MOUSEEVENTF_LEFTUP = 0x04;
        private const int MOUSEEVENTF_RIGHTDOWN = 0x08;
        private const int MOUSEEVENTF_RIGHTUP = 0x10;
        
        
        //set cursor position
        Cursor.Position = new System.Drawing.Point(webBrowser1.Location.X + this.Location.X + 570, webBrowser1.Location.Y + this.Location.Y + 300);

        //http://stackoverflow.com/a/2416762
        int X = Cursor.Position.X;
        int Y = Cursor.Position.Y;
        mouse_event(MOUSEEVENTF_LEFTDOWN | MOUSEEVENTF_LEFTUP, X, Y, 0, 0);