        public MainForm()
        {
            InitializeComponent();

            lstErrors.ListBox.MouseDoubleClick  += new MouseEventHandler(lstErrors_MouseDoubleClick);
        }


        private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            lstErrors.ListBox.MouseDoubleClick -= new MouseEventHandler(lstErrors_MouseDoubleClick);
        }
