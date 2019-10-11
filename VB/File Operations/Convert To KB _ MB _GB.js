Private Function SetBytes(Bytes) As String

On Error GoTo hell

If Bytes >= 1073741824 Then
    SetBytes = Format(Bytes / 1024 / 1024 / 1024, "#0.00") & " GB"
ElseIf Bytes >= 1048576 Then
    SetBytes = Format(Bytes / 1024 / 1024, "#0.00") & " MB"
ElseIf Bytes >= 1024 Then
    SetBytes = Format(Bytes / 1024, "#0.00") & " KB"
ElseIf Bytes < 1024 Then
    SetBytes = Fix(Bytes) & " Bytes"
End If

Exit Function
hell:
SetBytes = "0 Bytes"
End Function

-or-

FormatNumber(d.Size / 1024, 0) 
gia kbytes