Private Sub Form_Load()
    List1.OLEDropMode = vbOLEDropManual
End Sub


Private Sub List1_OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
    Dim i As Long
        
    For i = 1 To Data.Files.Count
        List1.AddItem Data.Files(i)
    Next i
End Sub