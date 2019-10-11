'Redirect
response.Redirect("default.asp?login=fail")

'in default.asp can read the variable login :
<%  if Request.QueryString("login") = "fail" then
                        response.write("<p align='center'>Login ERROR</p>")
                 end if

'ama 8eloyme na doyme ean yparxei h variable apla:

if Request.QueryString("searchbycategory") <> ""
end if

%>

'--------------------------------------------
genika se ena ASP arxeio poy kanei post se mia allh selida :

<body>
<form method="post" action="addnewFinal.asp">
	'textboxes/tables as HTML etc.
	.
	.<textarea name="productBBcode" id="productBBcode"  style="width: 600px; height:600px"></textarea>
	.
	.<input name="productTitle" type="text" id="productTitle" style="width: 600px" value="" maxlength="255" />
	.
	'textboxes/tables as HTML etc.


	<input type="submit" name="cmdSave" id="cmdSave" value="Save" onclick="return validateForm();" />
</form>


'sto addnewFinal.asp diabazoyme ta form objects :
dim productTitle
dim productBBcode

productTitle = request.Form("productTitle")
productBBcode = request.Form("productBBcode")

'--------------------------------------------
'genika gia GLOBAL variables poy paizoyn mono sto SESSION (u can use it for LOGOUT procedure, just empty it)
Session("userID") = rs(1)

kai meta se opoio ASP 8eloyme apla

dim recID
recID = Session("userID")