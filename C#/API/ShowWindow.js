        //http://msdn.microsoft.com/en-us/library/windows/desktop/ms633548(v=vs.85).aspx
        [DllImport("user32.dll")]
        public static extern Boolean ShowWindow(IntPtr hWnd, Int32 nCmdShow);