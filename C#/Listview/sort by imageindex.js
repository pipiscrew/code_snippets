//http://www.vbforums.com/showthread.php?660200-RESOLVED-Listview-Sorting-by-ImageIndex

    class ListViewColumnSorter : IComparer
    {
        public int Compare(object x, object y)
        {
            ListViewItem listviewX, listviewY;

            listviewX = (ListViewItem)x;
            listviewY = (ListViewItem)y;

            return listviewX.ImageIndex.CompareTo(listviewY.ImageIndex);
        }
    }
    
   //use of 
    lstv.BeginUpdate();
    .
    .
    .
    
    lstv.ListViewItemSorter = new ListViewColumnSorter();
    lstv.Sort();
    lstv.EndUpdate();