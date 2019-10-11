
Public Function ToSqlDate101(vDate As Variant) As String
    On Error Resume Next
    ToSqlDate101 = vbNullString
    If Not IsDate(vFieldVal(vDate)) Then
        ToSqlDate101 = " CONVERT(SMALLDATETIME, '" & Format(Now, "mm/dd/yyyy 00:00:00") & "', 101) "
    Else
        ToSqlDate101 = " CONVERT(SMALLDATETIME, '" & Format(CDate(vDate), "mm/dd/yyyy 00:00:00") & "', 101) "
    End If
End Function

Public Function ToSqlDateTime101(vDateTime As Variant) As String
    On Error Resume Next
    ToSqlDateTime101 = vbNullString
    If Not IsDate(vFieldVal(vDateTime)) Then
        ToSqlDateTime101 = " CONVERT(SMALLDATETIME, '" & Format(Now, "mm/dd/yyyy HH:MM:SS") & "', 101) "
    Else
        ToSqlDateTime101 = " CONVERT(SMALLDATETIME, '" & Format(CDate(vDateTime), "mm/dd/yyyy HH:MM:SS") & "', 101) "
    End If
End Function

Public Function ToSqlDate120(vDate As Variant) As String
    On Error Resume Next
    ToSqlDate120 = vbNullString
    If Not IsDate(vFieldVal(vDate)) Then
        ToSqlDate120 = " CONVERT(SMALLDATETIME, '" & Format(Now, "yyyy-MM-dd 00:00:00") & "', 120) "
    Else
        ToSqlDate120 = " CONVERT(SMALLDATETIME, '" & Format(CDate(vDate), "yyyy-MM-dd 00:00:00") & "', 120) "
    End If
End Function

Public Function ToSqlDateTime120(vDateTime As Variant) As String
    On Error Resume Next
    ToSqlDateTime120 = vbNullString
    If Not IsDate(vFieldVal(vDateTime)) Then
        ToSqlDateTime120 = " CONVERT(SMALLDATETIME, '" & Format(Now, "yyyy-MM-dd HH:MM:SS") & "', 120) "
    Else
        ToSqlDateTime120 = " CONVERT(SMALLDATETIME, '" & Format(CDate(vDateTime), "yyyy-MM-dd HH:MM:SS") & "', 120) "
    End If
End Function

