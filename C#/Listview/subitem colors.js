//http://stackoverflow.com/a/8415266/1320686

ListViewItem lv = null;

foreach (string item in dr)
{
    lv = new ListViewItem(item);
    
    //you must set this to ListViewItem
    lv.UseItemStyleForSubItems = false;
    lv.SubItems.Add("0");
    lv.SubItems.Add("0");
    lv.SubItems.Add("Ready to go!");
    lv.Checked = true;

    lstv.Items.Add(lv);
}


foreach (ListViewItem item in lstv.CheckedItems)
{
	item.SubItems[1].Text = Directory.GetFiles(item.Text, "*.pdf").Count().ToString();
	item.SubItems[2].Text = Directory.GetDirectories(item.Text).Count().ToString();
	
	//then::
	item.SubItems[2].BackColor = Color.Red;
	item.SubItems[2].ForeColor = Color.Yellow;
}
            