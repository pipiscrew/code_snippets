<%
Public function GetRecordset(sql) 
        Dim objConn
        Dim rsServer
        
        Set objConn = Server.CreateObject("ADODB.Connection")
        objConn.ConnectionString = "PROVIDER=Microsoft.Jet.OLEDB.4.0;Data Source=" & Server.MapPath("myASPdbase.mdb")
        objConn.Open        

        set rsServer = Server.CreateObject("ADODB.Recordset")
        rsServer.CursorLocation = 3 '2=adUseServer  '3= adUseClient

        rsServer.open sql,objconn, 3 '3, 1, 1 = adOpenStatic, adLockReadOnly, adCmdText

        
        Set GetRecordset = rsServer
        
        Set rsServer = Nothing
        Set objConn = Nothing

end function
%>



^se ena ASP arxeio to opoio ginetai include sto trexwn ASP kai to 'fwnazoyme :

<%
dim rs

set rs=getrecordset("select userLevel,userID from [users] where username='" & uS & "'")

if rs.eof then
        response.Redirect("default.asp?login=fail")        
else
        response.Redirect("mainpage.asp")        
end if
%>

'h se LOOPA

<%
dim rs

set rs=getrecordset("select userLevel,userID from [users] where username='" & uS & "'")

while not rs.eof
      response.write rs(0)
	rs.movenext 
wend
%>