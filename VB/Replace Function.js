Public Function Replace(ByVal TextToReplace As String, OldChr As String, NewChr As String) As String 
    Dim x As Long 

    Do 
        x = InStr(TextToReplace, OldChr) 
        If x <> 0 Then _ 
        Mid(TextToReplace, x, Len(OldChr)) = NewChr 
    Loop While x <> 0 
    Replace = TextToReplace 
End Function