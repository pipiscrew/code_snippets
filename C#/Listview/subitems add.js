                ListViewItem lv = null;
                ListViewItem.ListViewSubItem lvSub = null;
                long length = 0;
                for (int i = 0; i < data.Length; i++)
                {
                    length = new System.IO.FileInfo(data[i]).Length;

                    if (length > 208000)
                        continue;

                    lv = new ListViewItem(data[i], 0);

                    lvSub = new  ListViewItem.ListViewSubItem();
                    lvSub.Text="Ready";
                    lv.SubItems.Add(lvSub);

                    lvSub = new ListViewItem.ListViewSubItem();
                    lvSub.Text = General.GetFileSize(length);
                    lv.SubItems.Add(lvSub);

                    lstv.Items.Add(lv);
                }