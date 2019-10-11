        private void CheckUnListviewItems(bool val)
        {
            foreach (ListViewItem listItem in lstv.Items)
            {
                listItem.Checked = val;
            }
        }
        
'OR for selected

                ListView.SelectedListViewItemCollection selectedOnly = listV1.SelectedItems;

                foreach (ListViewItem lv in selectedOnly)
                {
                    lv.Selected = false;
                }

'OR

				ListView.CheckedListViewItemCollection checkedOnly = lv.CheckedItems;

                foreach (ListViewItem lv in selectedOnly)
                {
                    lv.Selected = false;
                }