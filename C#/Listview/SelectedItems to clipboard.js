        private void toolStripMenuItem2_Click(object sender, EventArgs e)
        {
            if (lstv3.SelectedItems.Count == 0) return;

            string tmp="";
            foreach (ListViewItem item in lstv3.SelectedItems)
            {
                tmp += " *\t" + item.Text  + "\r\n" + item.SubItems[1].Text + "\r\n";
            }

            if (tmp.Length > 0)
            {
                General.Copy2Clipboard(tmp);
            }
        }