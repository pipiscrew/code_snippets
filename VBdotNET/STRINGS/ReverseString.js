Function ReverseString(ByVal targetString As String) As String
    Dim Characters() As Char = targetString.ToCharArray
    Array.Reverse(Characters)
    Return Characters
End Function
