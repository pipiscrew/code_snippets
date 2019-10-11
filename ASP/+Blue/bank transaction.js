''''''''Initialization
Dim action,orderId,merchantId,language,orderDesc,orderAmount,sCurrency,payerEmail,trType,confirmUrl,cancelUrl,digest,sharedSecret, installmentsOffset, installmentsPeriod
installmentsOffset = 0

'BUG-orderAmount = Cdbl(Replace(FinalCost, ".", ","))
orderAmount = Replace(FinalCost, ".", ",")
orderId = New_Order_Id
payerEmail = Visitor_Email
orderDesc = "Order"
sCurrency = "EUR"
language = "GR"

'validatation is integer
if IsNumeric(Request("CardInstallment")) then 
	installmentsPeriod = Request("CardInstallment")
else 
	installmentsPeriod = 0
end if

trType = 1 '1=sale, 2=authorization        
'confirmUrl = "http://localhost:1400/ok.asp"
'cancelUrl = "http://localhost:1400/notOk.asp?orderId=" & orderId

confirmUrl = "http://www.x.com/ok.asp"
cancelUrl = "http://www.x.com/notOk.asp?orderId=" & orderId

merchantId = "34534534534"
action = "https://euro.test.x.com/vpos/shophandlermpi"
sharedSecret = "Cardlink"
action = "https://vpos.xcommerce.gr/vpos/shophandlermpi"
sharedSecret = "9012378120378120"

''''''''SHA1 base64
Dim encodeUTF, enc, bytes, instr, pos, concat_str

If installmentsPeriod > 0 Then
	concat_str = merchantId & language & orderId & orderDesc & orderAmount & sCurrency & payerEmail & trType & installmentsOffset & installmentsPeriod &confirmUrl & cancelUrl & sharedSecret 
Else
	concat_str = merchantId & language & orderId & orderDesc & orderAmount & sCurrency & payerEmail & trType &confirmUrl & cancelUrl & sharedSecret 
End If

'Borrow some objects from .NET
Set encodeUTF = CreateObject("System.Text.UTF8Encoding")
Set enc = CreateObject("System.Security.Cryptography.SHA1CryptoServiceProvider") 
'Convert the string to a byte array and hash it
bytes = encodeUTF.GetBytes_4(concat_str)
bytes = enc.ComputeHash_2((bytes)) 
'Convert the byte array to a hex string
digest = encodeBase64(bytes)


function encodeBase64(bytes)
	dim DM, EL
	Set DM = CreateObject("Microsoft.XMLDOM")
	' Create temporary node with Base64 data type
	Set EL = DM.createElement("tmp")
	EL.DataType = "bin.base64"
	' Set bytes, get encoded String
	EL.NodeTypedValue = bytes
	encodeBase64 = EL.Text
end function

function decodeBase64(base64)
	dim DM, EL
	Set DM = CreateObject("Microsoft.XMLDOM")
	' Create temporary node with Base64 data type
	Set EL = DM.createElement("tmp")
	EL.DataType = "bin.base64"
	' Set encoded String, get bytes
	EL.Text = base64
	decodeBase64 = EL.NodeTypedValue
end function