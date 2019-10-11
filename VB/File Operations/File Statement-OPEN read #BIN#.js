Private Function BinaryRead(ByRef sFileName As String) As String
    Dim fh As Integer
    fh = FreeFile
    
    Open sFileName For Binary As #fh
    BinaryRead = Input$(LOF(fh), fh)
    Close #fh
End Function