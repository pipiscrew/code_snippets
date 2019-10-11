'primary
			string fl = "";
            string bytes = "";
            string references = "";
            bool strong = false;
-->         frmCompareFiles tmpFRM = new frmCompareFiles(lstv.SelectedItems[0].Index, lstv.SelectedItems[0].Text);
            DialogResult result = tmpFRM.ShowDialog(out fl, out bytes, out references, out strong);

            if (result == DialogResult.OK)
            {
                lstv.SelectedItems[0].Text = fl;
                lstv.SelectedItems[0].SubItems[1].Text = bytes;
                lstv.SelectedItems[0].SubItems[2].Text = references;
                lstv.SelectedItems[0].SubItems[3].Text = strong.ToString();
            }

            tmpFRM.Dispose();


'child
        public frmCompareFiles()
        {
            InitializeComponent();

            this.Font = new Font("Segoe UI", 8);
        }

        public frmCompareFiles(int LoadPATCHindex,string filename)
        {
            InitializeComponent();

            this.Font = new Font("Segoe UI", 8);

            textBox1.Text = filename;
            editPatch = LoadPATCHindex;
        }