[DllImport("user32.dll")]
[return: MarshalAs(UnmanagedType.Bool)]
static extern bool SetForegroundWindow(IntPtr hWnd);


//http://stackoverflow.com/questions/1730731/how-to-start-winform-app-minimized-to-tray
        static void Main(string[] args)
        {
                if (args.Length == 0)
                    Application.Run(new MainForm(false));
                else
                {
                    if (args[0].ToString().ToLower().Trim() == "-hide")
                        Application.Run(new MainForm(true));
                }
        }
        
//@ MainForm (warning when start minimized not compile the Form_Load
        internal bool startMinimized=false;

        public MainForm(bool minimize)
        {
            InitializeComponent();

            trayIcon.Text = Application.ProductName;

            startMinimized = minimize;
        }

        protected override void SetVisibleCore(bool value)
        {
            if (startMinimized) value = false;
            {
                startMinimized = false;
                base.SetVisibleCore(value);
            }
        }
        
        private void trayIcon_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button == System.Windows.Forms.MouseButtons.Left)
            {
                this.Show();
                // Set foreground window.
                User32.SetForegroundWindow(this.Handle);
            }
        }

        private void toolStripExit_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
        
        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            if (e.CloseReason == CloseReason.UserClosing)
            {
                this.Hide();
                e.Cancel = true;
                return;
            }
        }