                lstv.Items.Clear();

                for (int i = 0; i < tmp.Length; i++)
                {

                    ListViewItem item1 = new ListViewItem(tmp[i]);
                    item1.SubItems.Add("SubItem1a");
                    item1.SubItems.Add("SubItem1b");

                    lstv.Items.Add(item1);
                }