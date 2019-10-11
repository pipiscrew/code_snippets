Private Sub lstV_ColumnClick(ByVal ColumnHeader As MSComctlLib.ColumnHeader)
lstV.SortKey = ColumnHeader.Index - 1
lstV.Sorted = True

If lstV.SortOrder = lvwAscending Then
    lstV.SortOrder = lvwDescending
Else
    lstV.SortOrder = lvwAscending
End If
End Sub

kai sto filllist

lstV2.Sorted = False

lstV.ListItems.Clear


----
optimized:

lstv.SortOrder = (lstv.SortOrder - 1) * -1
lstv.Sorted = True