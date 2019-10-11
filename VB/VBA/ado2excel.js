You can open an excel spreadsheet with ado and treat each worksheet like an ado recordset

dim oconn as adodb.connection
dim ors as adodb.recordset
'
' this assumes that the first row contains headers
'
Set oConn = New ADODB.Connection
oConn.Open "Provider=Microsoft.Jet.OLEDB.4.0;" & "Data Source=" & sxlsfilename & ";" & "Extended Properties=""Excel 8.0;HDR=YES;"""
'
' the table name is the worksheet name
'
sTableName = "[sheet1$]"
sTableName = "select * from " & sTableName
'
'Get the recordset
'
Set oRS = New ADODB.Recordset
oRS.Open sTableName, oConn, adOpenStatic, adLockOptimistic
nCols = oRS.Fields.Count

more information can be found on msdn and microsoft knowledge base
