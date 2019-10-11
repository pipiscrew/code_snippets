//listV1 = listview
//listV2 = listview
//
//from listV1 we can drop to listV2
//and we can also DragDrop (reposition) the listV2 items!

       #region " LISTVIEWs DRAG+DROP EVENTS "

        private void listV1_ItemDrag(object sender, ItemDragEventArgs e)
        {
            rePositioning = false;

            if (CheckIFisForeignAndIsOKtoDROP() == true)
                listV1.DoDragDrop(e.Item, DragDropEffects.Move);
        }

        private void listV2_DragEnter(object sender, DragEventArgs e)
        {
            // this code can be in DragOver also
            if (e.Data.GetDataPresent(typeof(ListViewItem)))
                e.Effect = DragDropEffects.Move;
        }


        bool rePositioning = false;
        private void listV2_ItemDrag(object sender, ItemDragEventArgs e)
        {
            rePositioning = true;
            DoDragDrop(e.Item, DragDropEffects.Move);
        }


        private void listV2_DragDrop(object sender, DragEventArgs e)
        {
            if (rePositioning)
            {
                ListViewItem li = (ListViewItem)e.Data.GetData(typeof(ListViewItem));

                //Returns the location of the mouse pointer in the ListView control.
                Point cp = listV2.PointToClient(new Point(e.X, e.Y));
                //Obtain the item that is located at the specified location of the mouse pointer.
                ListViewItem dragToItem = listV2.GetItemAt(cp.X, cp.Y);

                //if dropped to empty space
                if (dragToItem == null)
                    return;

                //dropped to listview
                //if not dropped to last item
                if (dragToItem.Index < listV2.Items.Count - 1)
                {
                    //avoid to repositing to same index
                    if ((li.Index + 1) == dragToItem.Index)
                        return;

                    listV2.Items.Insert(dragToItem.Index, (ListViewItem)li.Clone());
                }
                else //if dropped to last lstvitem
                    listV2.Items.Add((ListViewItem)li.Clone());

                li.Remove();
            }
            else
            {
                //Returns the location of the mouse pointer in the ListView control.
                Point cp = listV2.PointToClient(new Point(e.X, e.Y));
                //Obtain the item that is located at the specified location of the mouse pointer.
                ListViewItem dragToItem = listV2.GetItemAt(cp.X, cp.Y);

                int insINDEX = -1;
                if (dragToItem != null)
                    insINDEX = dragToItem.Index;


                ListViewItem li = (ListViewItem)e.Data.GetData(typeof(ListViewItem));

                AddToListv2(li, insINDEX);
            }
        }

		#endregion