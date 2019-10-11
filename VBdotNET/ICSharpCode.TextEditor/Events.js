        public Form1()
        {
            InitializeComponent();

            textEditorControl1.ActiveTextAreaControl.TextArea.KeyUp += new KeyEventHandler(textEditorControl1_KeyUp);
        }

        private void textEditorControl1_KeyUp(object sender, KeyEventArgs e)
        {
            MessageBox.Show("HGj");
        }