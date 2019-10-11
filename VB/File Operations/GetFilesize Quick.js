Dim oldSize$

On Error Resume Next

oldSize = FileLen(App.Path & "/data.dbf")

If CompactDB("data.dbf", "data.dbf2") = True Then
    tempRes = IIf(oldSize = FileLen("data.dbf"), "No changes", "All Done!" & vbCrLf & vbCrLf & "Old Filesize : " & Format(oldSize, "#,##0") & " bytes" & vbCrLf & "New Filisize : " & Format(FileLen("data.dbf"), "#,##0") & " bytes")
    MsgBox tempRes, vbInformation, apTitle
End If