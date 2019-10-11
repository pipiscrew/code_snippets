Private Sub Form_Load()
lstv.ColumnHeaders.Add , , "FilePath", 5000
lstv.ColumnHeaders.Add , , "Status", 1500
lstv.ColumnHeaders.Add , , "Link", 5000

lstv.OLEDropMode = ccOLEDropManual
End Sub



Private Sub lstv_OLEDragDrop(Data As MSComctlLib.DataObject, Effect As Long, Button As Integer, Shift As Integer, x As Single, y As Single)
    Dim i As Long
        
    For i = 1 To Data.Files.Count
        lstv.ListItems.Add , , Data.Files(i)
    Next i
End Sub