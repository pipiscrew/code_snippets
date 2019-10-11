        private bool ListCompareLines(string txt2find)
        {
            foreach (ListViewItem lvitem in lstv3.Items)
            {
                if (lvitem.Text == (txt2find))
                    return true;
            }

            return false;
        }