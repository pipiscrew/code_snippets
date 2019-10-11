//http://www.pipiscrew.com/2015/11/aspvbs-sha-hash-tobase64string/

<%
dim concat_str
 
concat_str = "1030204645TT3343PipisCrew Order3.10EURDEMO@PIPISCREW.COM1http://localhost/success.htmlhttp://localhost:1400/cancel.html?orderId=13564MediaLink"
 
'Borrow some objects from .NET
Set ccc = CreateObject("System.Text.UTF8Encoding")
Set enc = CreateObject("System.Security.Cryptography.SHA1CryptoServiceProvider") 
 
'Convert the string to a byte array and hash it
bytes = ccc.GetBytes_4(concat_str)
bytes = enc.ComputeHash_2((bytes)) 
'Convert the byte array to a hex string
 
'1st way
'zRRNmrTgh1lwz5HHj8HoGZ6wjms=
digest = encodeBase64(bytes)
 
'2nd way
'zRRNmrTgh1lwz5HHj8HoGZ6wjms=
digest = ToBase64String(bytes)
 
'notice - the ToBase64String/encodeBase64 output is the same with this piece of PHP code
'<?php
'$digest = base64_encode(sha1("1030204645TT3343PipisCrew Order3.10EURDEMO@PIPISCREW.COM1http://localhost/success.htmlhttp://localhost:1400/cancel.html?orderId=13564MediaLink",true));
'
'echo $digest;
'?>
 
Response.Write(digest)
 
Function ToBase64String(rabyt)
   
  'Ref: http://stackoverflow.com/questions/1118947/converting-binary-file-to-base64-string
  Dim xml: Set xml = CreateObject("MSXML2.DOMDocument.3.0")
  xml.LoadXml "<root/>"
  xml.documentElement.dataType = "bin.base64"
  xml.documentElement.nodeTypedValue = rabyt
  ToBase64String = Replace(xml.documentElement.Text,VbLf, "")
   
End Function
 
Function encodeBase64(bytes)
    dim DM, EL
    Set DM = CreateObject("Microsoft.XMLDOM")
    ' Create temporary node with Base64 data type
    Set EL = DM.createElement("tmp")
    EL.DataType = "bin.base64"
    ' Set bytes, get encoded String
    EL.NodeTypedValue = bytes
    encodeBase64 = EL.Text
End Function
   
 
%>