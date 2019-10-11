'http://www.nitobelmont.com/2010/02/simple-base64-encodedecode-visual-basic-6/
Public Function EncodeBase64(ByRef ArrData() As Byte) As String

Dim objXML As MSXML2.DOMDocument
Dim objNode As MSXML2.IXMLDOMElement

' help from MSXML
Set objXML = New MSXML2.DOMDocument

' byte array to base64
Set objNode = objXML.createElement("b64")
objNode.DataType = "bin.base64"
objNode.nodeTypedValue = ArrData
EncodeBase64 = objNode.Text

' thanks, bye
Set objNode = Nothing
Set objXML = Nothing

End Function

Public Function DecodeBase64(ByVal strData As String) As Byte()

Dim objXML As MSXML2.DOMDocument
Dim objNode As MSXML2.IXMLDOMElement

' help from MSXML
Set objXML = New MSXML2.DOMDocument
Set objNode = objXML.createElement("b64")
objNode.DataType = "bin.base64"
objNode.Text = strData
DecodeBase64 = objNode.nodeTypedValue

' thanks, bye
Set objNode = Nothing
Set objXML = Nothing

End Function

