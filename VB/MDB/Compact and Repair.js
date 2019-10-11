'References Microsoft Jet and Replications Objects
'JET and Replications included to MDAC v2.8

Private Function CompactDB(ByRef SourceDB As String, _
                          ByRef DestDB As String, _
                          Optional ByRef Pswd As String = "") As Boolean
On Error GoTo ErrHandler

    Dim JRO As JRO.JetEngine
    Dim SourceCnn As String
    Dim DestCnn As String
      
    Set JRO = New JRO.JetEngine
     
    ' Kill the backup file if it currently exists
    If Dir(DestDB) <> vbNullString Then Kill DestDB
      
    ' Build the SourceConnection ConnectionString
    SourceCnn = "Provider=Microsoft.Jet.OLEDB.4.0" & _
                ";Data Source=" & SourceDB & _
                ";Jet OLEDB:Database Password=" & Pswd
     
    ' Build the DestConnection ConnectionString
    DestCnn = "Provider=Microsoft.Jet.OLEDB.4.0" & _
              ";Data Source=" & DestDB & _
              ";Jet OLEDB:Engine Type=5" & _
              ";Jet OLEDB:Database Password=" & Pswd
     
    ' Create a compacted replica
    JRO.CompactDatabase SourceCnn, DestCnn
     
    ' Kill the original and rename the replica
    Kill SourceDB
    Name DestDB As SourceDB
    CompactDB = True
     
ErrHandler:
    Set JRO = Nothing
     
    If Err.Number <> 0 Then
        CompactDB = False
        MsgBox "Something go wrong" & vbCrLf & vbCrLf & "Make sure that you have installed MS.MDAC v2.8" & vbCrLf & vbCrLf & "Send this to author : " & vbCrLf & Err.Description & vbCrLf & Err.Number & " - " & Err.Source, vbCritical, apTitle
    End If
End Function