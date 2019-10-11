//http://support.microsoft.com/kb/822483

        private void listV2_DragDrop(object sender, DragEventArgs e)
        {
            //Returns the location of the mouse pointer in the ListView control.
            Point cp = listV2.PointToClient(new Point(e.X, e.Y));
            //Obtain the item that is located at the specified location of the mouse pointer.
            ListViewItem dragToItem = listV2.GetItemAt(cp.X, cp.Y);

            int insINDEX= -1 ;
            if (dragToItem!=null)
               insINDEX=dragToItem.Index;


            ListViewItem li = (ListViewItem)e.Data.GetData(typeof(ListViewItem));

            AddToListv2(li,insINDEX);

        } 