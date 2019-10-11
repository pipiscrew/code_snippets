        private void toolStripShrink_Click(object sender, EventArgs e)
        {
            string fl = Application.StartupPath + "\\" + General.prevDB;

            double before;

            FileInfo f;
            f = new FileInfo(fl);
            before = f.Length;

            General.Conne.GetConnection().Vacuum();

            f = new FileInfo(fl);

            MessageBox.Show("Filesize before : " + General.GetFileSize(before) + "\r\n\r\nFilesize after  : " + General.GetFileSize(f.Length), General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Information);
        }