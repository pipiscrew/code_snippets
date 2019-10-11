//http://stackoverflow.com/a/12946733

<%
    Response.Buffer = False
    Dim objStream
    Set objStream = Server.CreateObject("ADODB.Stream")
    objStream.Type = 1 'adTypeBinary
    objStream.Open
    objStream.LoadFromFile("C:\x\admin1\x.gr\wwwroot\x.rar")
    Response.ContentType = "application/x-unknown"
    Response.Addheader "Content-Disposition", "attachment; filename=" & strFile
    Response.BinaryWrite objStream.Read
    objStream.Close
    Set objStream = Nothing
	
%>