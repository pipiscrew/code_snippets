        Dim encoding As New System.Text.ASCIIEncoding()
        Dim data2 As Byte() = encoding.GetBytes("veteran")


'den paizei rolo ean einai HEX or NOT

'or

    Public Function StrToByteArray(ByVal str As String) As Byte()
        Dim encoding As New System.Text.UnicodeEncoding
        Return encoding.GetBytes(str)
    End Function