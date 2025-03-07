'////////////////////// METHOD with Disconnected Recordset
'
'general.asp
Public Function GetRecordset(sql)
	Dim objConn
	Dim rsServer

	Set objConn = Server.CreateObject("ADODB.Connection")
	objConn.ConnectionString = application("connection_string")
	objConn.Open
	set rsServer = Server.CreateObject("ADODB.Recordset")
	rsServer.open sql,objconn, 3, 1            'adOpenStatic, adLockReadOnly

	Set GetRecordset = rsServer

	objConn.Close
	Set objConn = Nothing
End function

'main.asp
<!-- #include File="general.asp" -->
<%
	Set grid1rs = GetRecordset(sql1)
		while not grid1rs.EOF
			' use the records
			grid1rs.movenext
		wend

	'close recordset
	grid1rs.Close
	Set grid1rs = Nothing
%>
'
'////////////////////// METHOD without Disconnected Recordset
/
'general.asp
Public Function GetRecordset(sql)
	Dim objConn
	Dim rsServer

	Set objConn = Server.CreateObject("ADODB.Connection")
	objConn.ConnectionString = application("connection_string")
	objConn.Open
	set rsServer = Server.CreateObject("ADODB.Recordset")
	rsServer.open sql,objconn, 3, 1

	Set GetRecordset = rsServer
End function

'main.asp
<!-- #include File="general.asp" -->
<%
	Set grid1rs = GetRecordset(sql1)
		while not grid1rs.EOF
			' use the records
			grid1rs.movenext
		wend

	'close recordset
	grid1rs.Close
	Set grid1rs = Nothing
	
	'close connection
	If Not grid1rs Is Nothing Then
		grid1rs.ActiveConnection.Close
		Set grid1rs.ActiveConnection = Nothing
	End If
%>