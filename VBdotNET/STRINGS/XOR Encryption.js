'same for encr/decrypt

Function XorString(ByVal targetString As String, ByVal maskValue As String) As String
    Dim Index As Integer = 0
    Dim ReturnValue As String = ""
    For Each CharValue As Char In targetString.ToCharArray
        ReturnValue = String.Concat(ReturnValue, Chr(Asc(CharValue) Xor Asc(maskValue.Substring(Index, 1))))
        Index = (Index + 1) Mod maskValue.Length
    Next
    Return ReturnValue
End Function
