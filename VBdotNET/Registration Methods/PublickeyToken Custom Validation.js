    Dim buffer As Byte() = New Byte() { 9, &HAF, &H73, 0, &HEE, &HC2, &H37, 1 }
    Dim publicKeyToken As Byte() = GetType(atg).Assembly.GetName.GetPublicKeyToken
    Dim i As Integer
    For i = 0 To buffer.Length - 1
        If (buffer(i) <> publicKeyToken(i)) Then
            Throw New InvalidOperationException
        End If
    Next i
