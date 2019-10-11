<% 
dim rs

Page = request("CurPage")

set rs = CreateObject("ADODB.Recordset")

rs.CursorLocation = 3 'adUseClient

PageSize    = 8

PageCurrent = CInt(Page)

if PageCurrent <= 0 Then 
            PageCurrent = 1 
            Page = 1
end if

set rs = GetRecordset("select top 200 * from [Avail] order by AvailID")
Product_Count = 0

if not rs.Eof then 
    Product_Count = rs.RecordCount
    rs.PageSize = PageSize 
    TotalPages   = rs.PageCount 
    rs.AbsolutePage = PageCurrent
end if 


 if cInt(TotalPages) > 1 then response.write  "<b>??????:</b>&nbsp;"

if cInt(Page) <> 1 then   
        Response.Write "<a href=""default.asp?CurPage=" & cInt(Page)-1 & """class=""paging""> &laquo; </a>  "
end if



For j =1 to TotalPages 
        if j <> cInt(Page) then
             Response.Write("<a href=""default.asp?CurPage=" & j & """class=""paging"">" & j & "</a>  ")
        else
             Response.Write("<font class=""paging_sel"">"& j & "</font> ")
        end if
next

if cInt(Page) <> TotalPages then                         
        Response.Write "<a href=""default.asp?CurPage=" & cInt(Page)+1 &"""class=""paging""> &raquo;</a>  "
end if 


'response.write "</td></tr><tr><td>&nbsp;</td></tr>"

response.Write("<table width=""300"" border=""1"" cellspacing=""0"" bordercolor=""#666666"">")
response.Write("<tr>")
response.Write("<td><div align=""center""><strong>ID</strong></div></td>")
response.Write("<td><div align=""center""><strong>Name</strong></div></td>")
response.Write("<td><div align=""center""><strong>Selection</strong></div></td>")
response.Write("</tr>")

dim counter
counter=0

        While Not rs.eof and counter < 8
                response.Write("<tr>")
                response.Write("<td>" & rs(0) & "</td>")
                response.Write("<td><a href='#' onClick='Update_Record("  & rs(0) & ")'>" & rs(1) & "</a></td>")
                response.Write("<td><input type='checkbox' value='" & rs(0) & "' name='recordID'></td>")
                response.Write("</tr>")
'                response.Write(rs(1)) & "<BR>"
                rs.movenext
                counter=cint(counter)+1
        wend
        
response.Write("</table>")
%>