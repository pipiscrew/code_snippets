
        private void lstv_MouseClick(object sender, MouseEventArgs e)
        {
            if (e.Button == System.Windows.Forms.MouseButtons.Right)
            {
                Cursor = System.Windows.Forms.Cursors.WaitCursor;
                copy_lstv_rows((ListView)sender);
                Cursor = System.Windows.Forms.Cursors.Default;
            }
        }

        private static void copy_lstv_rows(ListView l)
        {
            if (l.SelectedItems.Count == 0)
                return;

            string t = "";
            foreach (ListViewItem item in l.SelectedItems)
            {
                foreach (ListViewItem.ListViewSubItem item2 in item.SubItems)
                {
                    if (!string.IsNullOrEmpty(item2.Text))
                        t += item2.Text + "|";

                }

                t += "\r\n";
            }

            Copy2Clipboard(t);

        }

        public static void Copy2Clipboard(string val)
        {
            try
            {
                Clipboard.Clear();
                Clipboard.SetDataObject(val, true);
            }
            catch (Exception e)
            {
                MessageBox.Show(e.Message, Application.ProductName);
            }
        }