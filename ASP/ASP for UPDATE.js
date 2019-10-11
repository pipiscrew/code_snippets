**edit.asp
kapoy sthn edit form exoyme storarei to record ID se ena input poy einai hidden :
<input type="hidden" name="RECid" value="<%=Request.QueryString("id")%>" />



**editFINAL.asp
<%@ Language=VBScript %>
<% Response.Buffer = true %>
<!--#include file="GeneralMOD.asp"-->

<%
if Session("Login") <> "150398" then
        response.write("ERRORRRROR you cant access this page wihout login, sorry!")
        response.Redirect("default.asp")
else 
    dim productTitle
    dim productBBcode

    productTitle = request.Form("productTitle")
    productBBcode = request.Form("productBBcode")

    ExecuteSQL("update products set productName='" & Prepare_MonoQuote(productTitle) & "',productPHPbb='" & Prepare_MonoQuote(productBBcode) & "',dateModified='" & FormatDateTime(now(),2) & "',catID='" & request.Form("Category") & "' where productID =" & request.Form("RECid"))

    response.Redirect("mainpage.asp")
end if 
%>



^^kai sto SQL statement exoyme^^:
request.Form("RECid")