'///////////////////// general.asp
Public Function GetRecordset(sql)
	Dim objConn
	Dim rsServer

	Set objConn = Server.CreateObject("ADODB.Connection")
	objConn.ConnectionString = application("connection_string") 'global.asa or raw stirng
	objConn.Open
	set rsServer = Server.CreateObject("ADODB.Recordset")
	rsServer.CursorLocation = 3 'adUseClient
	rsServer.open sql,objconn, 3, 1 'adLockReadOnly

	Set GetRecordset = rsServer
End function

Public Function RecordsetToTableRows(rs)
	Dim i, str
	i=0
	
	while not rs.EOF
		i=i+1

		str = str & "<tr><td><span style='color:red'>" & i & "</span></td>"
		str = str & "<td>" & rs("customer_code") & "</td>"
		str = str & "<td>" & rs("customer_name") & "</td>"
		str = str & "<td>" & rs("customer_tel") & "</td>"
		str = str & "<td>" & REPLACE(replace(formatnumber(rs("debit"),2),"."," "),",",".") & "</td></tr>"
		rs.MoveNext
	wend
	RecordsetToTableRows = str
End Function


'///////////////////// main.asp

<!-- #include File="general.asp" -->

<%
	Set grid1rs = GetRecordset("select * from customers")
	
	while not grid1rs.EOF
		Response.Write grid1rs("customer_name")
		grid1rs.movenext
	wend

	grid1rs.movefirst 'set pointer to the start
%>
<table id="grid1" class="display compact nowrap"> 'datatables v1.11.5 (IE11 compatible)
	<thead>
		<tr>
			<th>No</th>
			<th>customer_code</th>
			<th>customer_name</th>
			<th>customer_tel</th>
			<th>debit</th>
		</tr>
	</thead>
	<tbody>
<% Response.Write RecordsetToTableRows(grid1rs) %>
	</tbody>
</table>

<%
	If Not grid1rs Is Nothing Then
		grid1rs.ActiveConnection.Close
		Set grid1rs.ActiveConnection = Nothing
	End If

	'... other sql queries below
%>
