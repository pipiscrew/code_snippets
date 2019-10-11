DataRowView dR = (DataRowView)lst.SelectedItem;
dR["TableDataField"].ToString()

//OR MS SAID
//http://msdn.microsoft.com/en-us/library/system.windows.forms.listbox.selecteditem(v=vs.71).aspx
//no work @ krypton

 // Get the currently selected item in the ListBox.
   string curItem = listBox1.SelectedItem.ToString();