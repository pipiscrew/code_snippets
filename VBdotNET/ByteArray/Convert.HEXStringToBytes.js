    Private Shared Function HexStringToBytes(ByVal hexString As String) As Byte()
        If hexString Is Nothing Then
            Throw New ArgumentNullException("hexString")
        End If

        If (hexString.Length And 1) <> 0 Then
            Throw New ArgumentOutOfRangeException("hexString", hexString, "hexString must contain an even number of characters.")
        End If

        Dim result As Byte() = New Byte(hexString.Length / 2 - 1) {}

        For i As Integer = 0 To hexString.Length - 1 Step 2
            result(i / 2) = Byte.Parse(hexString.Substring(i, 2), NumberStyles.HexNumber)
        Next

        Return result
    End Function