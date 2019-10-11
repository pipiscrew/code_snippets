        If lstv.SelectedIndices.Count = 0 Then Exit Sub
        Dim delItemIndex%

        delItemIndex = lstv.SelectedItems(0).Index

        lstv.Items.Remove(lstv.SelectedItems(0))

        If delItemIndex > 0 Then lstv.Items.Item(delItemIndex - 1).Selected = True : lstv.Focus()