<%@ Language=VBScript %>
<% Response.Buffer = true %>
<!--#include file="GeneralMOD.asp"-->

<%
dim productTitle
dim productBBcode

productTitle = request.Form("productTitle")
productBBcode = request.Form("productBBcode")

ExecuteSQL("insert into [products] (productName,productPHPbb,dateREC,catID,userID) values('" & Prepare_MonoQuote(productTitle) & "','" &  Prepare_MonoQuote(productBBcode) & "'," & FormatDateTime(now,2) & "," & request.Form("Category") & ","& Session("userID") & ")")

response.Redirect("mainpage.asp")
%>