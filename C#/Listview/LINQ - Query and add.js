//https://stackoverflow.com/a/26257573/1320686
    var matches = listView1.Items.Cast<ListViewItem>()
                  .Select(item => (ListViewItem)item.Clone())
                  .Where(item => item.Text.Contains(SearchTxtBox.Text));
    listView2.Items.Clear();
    listView2.Items.AddRange(matches.ToArray());