Public Shared Function ByteArrayToStr(ByVal dBytes As Byte()) As String
Dim str As String
Dim enc As New System.Text.ASCIIEncoding()
str = enc.GetString(dBytes)

Return str
End Function