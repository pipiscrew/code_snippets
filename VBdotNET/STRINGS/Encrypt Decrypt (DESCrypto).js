Public Shared Function Encrypt(ByVal stringToEncrypt As String, ByVal SEncryptionKey As String) As String
    Dim message As String
    Try 
        EncDecMOD.key = Encoding.UTF8.GetBytes(Strings.Left(SEncryptionKey, 8))
        Dim provider As New DESCryptoServiceProvider
        Dim bytes As Byte() = Encoding.UTF8.GetBytes(stringToEncrypt)
        Dim stream2 As New MemoryStream
        Dim stream As New CryptoStream(stream2, provider.CreateEncryptor(EncDecMOD.key, EncDecMOD.IV), CryptoStreamMode.Write)
        stream.Write(bytes, 0, bytes.Length)
        stream.FlushFinalBlock
        message = Convert.ToBase64String(stream2.ToArray)
    Catch exception1 As Exception
        ProjectData.SetProjectError(exception1)
        Dim exception As Exception = exception1
        message = exception.Message
        ProjectData.ClearProjectError
    End Try
    Return message
End Function

 

 
Public Shared Function Decrypt(ByVal stringToDecrypt As String, ByVal sEncryptionKey As String) As String
    Dim message As String
    Dim buffer As Byte() = New Byte((stringToDecrypt.Length + 1)  - 1) {}
    Try 
        EncDecMOD.key = Encoding.UTF8.GetBytes(Strings.Left(sEncryptionKey, 8))
        Dim provider As New DESCryptoServiceProvider
        buffer = Convert.FromBase64String(stringToDecrypt)
        Dim stream2 As New MemoryStream
        Dim stream As New CryptoStream(stream2, provider.CreateDecryptor(EncDecMOD.key, EncDecMOD.IV), CryptoStreamMode.Write)
        stream.Write(buffer, 0, buffer.Length)
        stream.FlushFinalBlock
        message = Encoding.UTF8.GetString(stream2.ToArray)
    Catch exception1 As Exception
        ProjectData.SetProjectError(exception1)
        Dim exception As Exception = exception1
        message = exception.Message
        ProjectData.ClearProjectError
    End Try
    Return message
End Function

 

 
