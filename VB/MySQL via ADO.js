//first we need to install odbc driver
//http://ftp.ntua.gr/pub/databases/mysql/Downloads/Connector-ODBC/5.1/mysql-connector-odbc-5.1.8-win32.msi

Public connImConnectionString As String
Public connIm As New ADODB.Connection 'MySQL

'in code
     connIm.Open "Driver={MySQL ODBC 5.1 Driver};Server=localhost;Database=test; User=root;Password=123456;Option=3;"


Public Function GetRecordSetForImport(SQL As String) As ADODB.Recordset
    On Error GoTo ErrLoop

    Dim rs As New ADODB.Recordset
    Dim cmd As New ADODB.Command

    'Create a new command that will execute the query
    Set cmd = New ADODB.Command
    cmd.ActiveConnection = connIm
    cmd.CommandType = adCmdText

    'This is your actual MySQL query
    cmd.CommandText = SQL

    'Executes the query-command and puts the result into Rs (recordset)
    Set rs = cmd.Execute


    Set GetRecordSetForImport = rs

    Exit Function
ErrLoop:
    MsgBox Err.Description & vbCrLf & vbCrLf & "The program now exit....Sorry!", vbCritical, "": End
End Function

'in code
    Dim rsImport As ADODB.Recordset
    Set rsImport = GetRecordSetForImport("select * from a00")

