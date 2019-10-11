Public Function isTime(Value As String) As Boolean
Dim mins As Integer
isTime = False
            If (Val(Value) > 24 Or Val(Value) < 1) Then Exit Function
            mins = Val(IIf(Mid$(Value, InStr(Value, ":") + 1) = "", 61, Mid$(Value, InStr(Value, ":") + 1)))
            If (mins > 60 Or mins < 0) Then Exit Function
    isTime = True
End Function