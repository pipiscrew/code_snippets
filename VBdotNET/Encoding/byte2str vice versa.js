' VB.NET to convert a string to a byte array
Public Shared Function StrToByteArray(str As String) As Byte()
   Dim encoding As New System.Text.ASCIIEncoding()
   Return encoding.GetBytes(str)
End Function 'StrToByteArray


' VB.NET to convert a byte array to a string:
Dim dBytes As Byte() = ...
Dim str As String
Dim enc As New System.Text.ASCIIEncoding()
str = enc.GetString(dBytes)
