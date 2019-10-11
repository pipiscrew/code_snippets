        Dim iIndices As Integer()
        ReDim iIndices(Me.lstv.SelectedIndices.Count - 1)
        lstv.SelectedIndices.CopyTo(iIndices, 0)

        For iIndex As Integer = iIndices.Length - 1 To 0 Step -1
            Dim oItem As ListViewItem  = lstv.Items(iIndices(iIndex))

            oItem.Selected = False ' even tried this!
            lstv.Items.Remove(oItem)
        Next