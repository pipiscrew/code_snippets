Public Shared Function NNE7SsGjVlLS4(ByVal text1 As String) As String
    Dim provider As New SHA1CryptoServiceProvider
    Dim bytes As Byte() = Encoding.ASCII.GetBytes(text1)
    bytes = provider.ComputeHash(bytes)
    Dim str2 As String = ""
    Dim num As Byte
    For Each num In bytes
        str2 = (str2 & num.ToString("x2"))
    Next
    Return str2
End Function

 
'or
'Can someone help me in decrypting a string that has been encrypted in the manner below?:
public static byte[] EncryptPassword(string password)
{
    UnicodeEncoding encoding = new UnicodeEncoding();
    byte[] hashBytes = encoding.GetBytes( password );

    // compute SHA-1 hash.
    SHA1 sha1 = new SHA1CryptoServiceProvider();
    byte[] cryptPassword = sha1.ComputeHash ( hashBytes );

    return cryptPassword;
}

'reply
'Nope! SHA1 hashing is a one way street. That's why it's so great for passwords. 
'If you are looking to do some kind of check of a password, you'll need to hash the 
'password entered and compare the result to the saved hashed password. 
'This is the usual technique. You can't however, un-hash