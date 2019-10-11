<table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="#666666">
              
<% 
dim rs

Page = request("CurPage")

set rs = CreateObject("ADODB.Recordset")

rs.CursorLocation = 3 'adUseClient

PageSize = 20

PageCurrent = CInt(Page)

if PageCurrent <= 0 Then 
    PageCurrent = 1 
    Page = 1
end if

set rs = GetRecordset("select productPHPbb,products.catID as [catID],catName,userName,format(daterec,'dd/mm/yyyy') as daterec,productID from (products left join categories on categories.catid = products.catid) left join users on users.userid = products.userid  order by daterec")

Product_Count = 0

if not rs.Eof then 
            Product_Count = rs.RecordCount
            rs.PageSize = PageSize 
            TotalPages   = rs.PageCount 
            rs.AbsolutePage = PageCurrent
end if 


if cInt(TotalPages) > 1 then response.write  "<b class=""pagelink"">Pages:</b>&nbsp;"

if cInt(Page) <> 1 then   
        Response.Write "<a href=""mainpage.asp?CurPage=" & cInt(Page)-1 & """class=""pagelink""> &laquo; </a>  " & vbCrLf
end if



For j =1 to TotalPages 
        if j <> cInt(Page) then
             Response.Write("<a href=""mainpage.asp?CurPage=" & j & """class=""pagelink"">" & j & "</a>  " & vbCrLf)
        else
             Response.Write("<font class=""pagecurrent"">"& j & "</font> " & vbCrLf)
        end if
next

if cInt(Page) <> TotalPages then                         
        Response.Write "<a href=""mainpage.asp?CurPage=" & cInt(Page)+1 &"""class=""pagelink""> &raquo;</a>  " & vbCrLf
end if 


dim counter
counter=0

        While Not rs.eof and counter < 20
                response.write("  <tr>" & vbCrLf)
    response.write("          <td width=""50%"" valign=""top""><div align=""center"">" & vbCrLf)
    ExportDetails rs("catName"),rs("userName"),rs("daterec"),rs("productID"),rs("catID")
    response.write("                        <p><br />" & vbCrLf)
                response.Write("          " & BBCodeToHTML(rs(0)) & vbCrLf)
                response.write("                        <br /><br /></p></div>" & vbCrLf)                
    response.write("          </td>" & vbCrLf)

    rs.movenext
        wend
%>

</table>