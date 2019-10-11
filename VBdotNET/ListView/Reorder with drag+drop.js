'http://support.microsoft.com/kb/822483/en-us
'to allowdrop property = true!
    Private Sub lstv_DragDrop(ByVal sender As Object, ByVal e As System.Windows.Forms.DragEventArgs) Handles lstv.DragDrop
        'Return if the items are not selected in the ListView control.
        If lstv.SelectedItems.Count = 0 Then Return
        'Returns the location of the mouse pointer in the ListView control.
        Dim p As Point = lstv.PointToClient(New Point(e.X, e.Y))
        'Obtain the item that is located at the specified location of the mouse pointer.
        Dim dragToItem As ListViewItem = lstv.GetItemAt(p.X, p.Y)
        If dragToItem Is Nothing Then Return
        'Obtain the index of the item at the mouse pointer.
        Dim dragIndex As Integer = dragToItem.Index
        Dim i As Integer
        Dim sel(lstv.SelectedItems.Count) As ListViewItem
        For i = 0 To lstv.SelectedItems.Count - 1
            sel(i) = lstv.SelectedItems.Item(i)
        Next
        For i = 0 To lstv.SelectedItems.Count - 1
            'Obtain the ListViewItem to be dragged to the target location.
            Dim dragItem As ListViewItem = sel(i)
            Dim itemIndex As Integer = dragIndex
            If itemIndex = dragItem.Index Then Return
            If dragItem.Index < itemIndex Then
                itemIndex = itemIndex + 1
            Else
                itemIndex = dragIndex + i
            End If
            'Insert the item in the specified location.
            Dim insertitem As ListViewItem = dragItem.Clone
            lstv.Items.Insert(itemIndex, insertitem)
            'Removes the item from the initial location while 
            'the item is moved to the new location.
            lstv.Items.Remove(dragItem)
        Next

    End Sub

    Private Sub lstv_DragEnter(ByVal sender As Object, ByVal e As System.Windows.Forms.DragEventArgs) Handles lstv.DragEnter
        Dim i As Integer
        For i = 0 To e.Data.GetFormats().Length - 1
            If e.Data.GetFormats()(i).Equals("System.Windows.Forms.ListView+SelectedListViewItemCollection") Then
                'The data from the drag source is moved to the target.
                e.Effect = DragDropEffects.Move
            End If
        Next
    End Sub

    Private Sub lstv_ItemDrag(ByVal sender As Object, ByVal e As System.Windows.Forms.ItemDragEventArgs) Handles lstv.ItemDrag
        'Begins a drag-and-drop operation in the ListView control.
        lstv.DoDragDrop(lstv.SelectedItems, DragDropEffects.Move)
    End Sub