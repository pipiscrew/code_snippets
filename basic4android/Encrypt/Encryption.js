//http://www.basic4ppc.com/forum/basic4android-updates-questions/12638-help-encryption-library-please.html#post71212
//lib : http://www.basic4ppc.com/forum/additional-libraries-official-updates/6839-base64-encryption-library.html#post39597

Public Function Encrypt(dataToEncrypt As String) As String
    Dim buffer As Byte() = Encoding.ASCII.GetBytes(dataToEncrypt)
    Dim des As TripleDESCryptoServiceProvider = New TripleDESCryptoServiceProvider()
    des.IV = New Byte() {211, 5, 233, 24, 55, 166, 7, 88}
    des.Key = ASCIIEncoding.ASCII.GetBytes("1234567890123456")
    Dim result = System.Convert.ToBase64String(des.CreateEncryptor().TransformFinalBlock(buffer, 0, buffer.Length))
    des.Clear()
    Return result
End Function

Public Function Decrypt(encryptedData As String) As String
    Dim buffer As Byte() = Convert.FromBase64String(encryptedData)
    Dim des As TripleDESCryptoServiceProvider = New TripleDESCryptoServiceProvider()
    des.IV = New Byte() {211, 5, 233, 24, 55, 166, 7, 88}
    des.Key = ASCIIEncoding.ASCII.GetBytes("123456780123456")
    Dim result As String = Encoding.ASCII.GetString(des.CreateDecryptor().TransformFinalBlock(buffer, 0, buffer.Length))
    des.Clear()
    Return result
End Function