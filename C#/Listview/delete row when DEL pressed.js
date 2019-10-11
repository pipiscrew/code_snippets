        private void lstv_KeyUp(object sender, KeyEventArgs e)
        {
            if (lstv.SelectedItems.Count > 0)
            {
                if (e.KeyData == Keys.Delete)
                {
                    lstv.SelectedItems[0].Remove();
                }
            }
        }