gia encypt ::

Private Sub Form_Unload(Cancel As Integer)
If Dir(App.path & "\urlData.dbf") = "urlData.dbf" Then
    ff = FreeFile
    Open "urlData.dbf" For Binary As #ff
    
    Put ff, 17, "."
    
    Close #ff
End If
End Sub




gia decrypt ::

If Dir(App.path & "\urlData.dbf") = "urlData.dbf" Then
    ff = FreeFile
    Open "urlData.dbf" For Binary As #ff
    
    Put ff, 17, " "
    
    Close #ff
End If