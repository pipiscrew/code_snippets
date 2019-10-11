Private Sub Form_OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
Dim item%

For item = 1 To Data.Files.Count
    MsgBox Data.Files.item(item)
Next

End Sub


kai to proeprty ths formas OLEDROPMODE = 1 - MANUAL


genikh procedure gia FORM&LABELS

Private Sub Form_OLEDragDrop(Data As DataObject, Effect As Long, Button As Integer, Shift As Integer, X As Single, Y As Single)
AddFromDRGandDRP Data
End Sub

Private Sub AddFromDRGandDRP(kDATA As DataObject)
On Error Resume Next
Screen.MousePointer = vbHourglass

Dim item%

For item = 1 To kDATA.Files.Count
    DoEvents
    If Dir(kDATA.Files.item(item)) <> vbNullString Then aDDtoLSTV kDATA.Files.item(item)
    DoEvents
Next

Screen.MousePointer = vbDefault

sHoWlstvSTATUS
End Sub