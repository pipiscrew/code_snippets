            ListView.SelectedListViewItemCollection items = lstv.SelectedItems;
            foreach (ListViewItem item in items)
                item.Remove();
                
//OR

                    for (int i = lstv.Items.Count - 1; i >= 0; i += -1)
                    {
                        if (lstv.Items[i].Selected)
                        {
                            lstv.Items[i].Remove();
                        }
                    }