'source : http://www.aspdev.org/articles/asp-error-handling/

<%
On Error resume next

dim rs
dim tmp

tmp = cstr(request.form("sqlStatement"))

set rs = getrecordset(tmp)

If Err.Number <> 0 then
    response.Write (Err.Description)
    Error.Clear
    response.End  ' stamataei ekei h selida den ektelei tpt allo
End If
%>

The On Error GoTo 0 statement is used to disable any error handling

kai stis sub/functions pianei to 
On Error goto ErrHandler