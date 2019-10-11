Private Sub Form_Load()
lstV2.ColumnHeaders.Add 1, "a", "Arithmos", 1000
lstV2.ColumnHeaders.Add 2, "b", "Poses Fores", 4200
lstV2.ColumnHeaders.Add 3, "c", "Mazika", 1000
lstV2.ColumnHeaders.Add 4, "d", "Number", 0
lstV2.ColumnHeaders.Add 5, "e", "Total", 0
lstV2.ColumnHeaders.Item(3).Alignment = lvwColumnCenter

    Do Until rsTemp.EOF
        lstv.ListItems.Add , "A" & rsTemp(0), rsTemp(1)
        
        lstv.ListItems.Item(i).SubItems(1) = "" & rsTemp(2) & "kb"
        lstv.ListItems.Item(i).SubItems(2) = rsTemp(3)
        lstv.ListItems.Item(i).SubItems(3) = rsTemp(0)
        
        i = i + 1
        rsTemp.MoveNext
    Loop

For i = 1 To 45
    lstV.ListItems.Add , "A" & i, i  ', , IIf(CustTransRS(10) = True, 1, 2)
    lstV.ListItems.Item(i).SubItems(1) = arr(i)
    lstV.ListItems.Item(i).SubItems(2) = Len(arr(i))
    lstV.ListItems.Item(i).SubItems(3) = Right("00000" & i, 5)
    lstV.ListItems.Item(i).SubItems(4) = Right("00000" & Len(arr(i)), 5)
Next i
End Sub 

Private Sub lstV2_ColumnClick(ByVal ColumnHeader As MSComctlLib.ColumnHeader)
lstV2.SortKey = ColumnHeader.Index - 1
If lstV2.SortKey = 0 Then lstV2.SortKey = 3 ' **** This column changes the key
If lstV2.SortKey = 2 Then lstV2.SortKey = 4 ' **** This column changes the key
lstV2.SortOrder = (lstV2.SortOrder - 1) * -1
lstV2.Sorted = True
End Sub