Attribute VB_Name = "mySQL"
Public Function GetRecordSetDataShape(ByVal sqlTBL1 As String, ByVal sqlTBL2 As String, ByVal REL As String) As ADODB.Recordset
    On Error GoTo ErrLoop
    Dim cnn As ADODB.Connection
    Dim rs As ADODB.Recordset
       
    Set cnn = New ADODB.Connection
    
   cnn.ConnectionString = "PROVIDER=MSDataShape;Data PROVIDER=MSDASQL;" + conneSTR1
   cnn.Open
   

    Set rs = New ADODB.Recordset

    rs.ActiveConnection = cnn
    rs.CursorLocation = adUseClient
    rs.CursorType = adOpenStatic
    rs.LockType = adLockReadOnly
    rs.Open "SHAPE {" & sqlTBL1 & "} " & _
               "APPEND ({" & sqlTBL2 & "} " & _
               "RELATE " & REL & ")"
               
    Set Source = rs
    
    Exit Function
ErrLoop:
    Set Source = Nothing
    MsgBox Err.Description & vbCrLf & vbCrLf & "The program now exit....Sorry!", vbCritical, "GetSourceRecordSet": End
End Function

'--GetRecordset supports RecordCount
Public Function GetRecordSet(ByVal SQL As String) As ADODB.Recordset
    On Error GoTo ErrLoop
    Dim rs As ADODB.Recordset

    Set rs = New ADODB.Recordset

    rs.ActiveConnection = conn1
    rs.CursorLocation = adUseClient
    rs.CursorType = adOpenStatic
    rs.LockType = adLockReadOnly
    rs.Open SQL

    Set GetRecordSet = rs

    Exit Function
ErrLoop:
    Set GetRecordSet = Nothing
    MsgBox Err.Description & vbCrLf & vbCrLf & "The program now exit....Sorry!", vbCritical, "GetSourceRecordSet": End
End Function


'--Executes a SQL Statement returns the RowsAffected
Public Function ExecuteSQL(ByVal SQL As String) As Long
    On Error GoTo ErrM
    conn1.Execute SQL, ExecuteSQLSource

    Exit Function
ErrM:
    ExecuteSQL = -1
    MsgBox Err.Description, vbExclamation, "ExecuteSQLSource"

End Function


'--Returna the first col of a recordset
Public Function ExecuteScalar(ByVal SQL As String) As String
    On Error GoTo ErrLoop
    Dim rs As ADODB.Recordset

    Set rs = New ADODB.Recordset

    rs.ActiveConnection = conn1
    rs.CursorLocation = adUseClient
    rs.CursorType = adOpenStatic
    rs.LockType = adLockReadOnly
    rs.Open SQL

    ExecuteScalar = rs(0)

    rs.Close
    Set rs = Nothing

    Exit Function
ErrLoop:
    ExecuteScalar = ""
    MsgBox Err.Description & vbCrLf & vbCrLf & SQL, vbExclamation, "ExecuteScalar"
End Function


'//format date for MySQL queries
Public Function GetDateAsMySQL(dtp As Date) As String
    Dim str As String

    str = Year(dtp) & "-" & Month(dtp) & "-" & Day(dtp)

    GetDateAsMySQL = str
End Function

