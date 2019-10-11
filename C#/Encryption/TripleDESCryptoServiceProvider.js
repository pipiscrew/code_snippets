//http://codemaverick.blogspot.com/2007/01/tripledes-encryption-in-net.html

private string Key = "";
private readonly byte[] IVector = new byte[8] { 27, 9, 45, 27, 0, 72, 171, 54 };
private string Encrypt(string inputString)
{

    byte[] buffer = Encoding.ASCII.GetBytes(inputString);
    TripleDESCryptoServiceProvider tripleDes = new TripleDESCryptoServiceProvider();
    MD5CryptoServiceProvider MD5 = new MD5CryptoServiceProvider();
    tripleDes.Key = MD5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(Key));
    tripleDes.IV = IVector;
    ICryptoTransform ITransform = tripleDes.CreateEncryptor();        
    return Convert.ToBase64String(ITransform.TransformFinalBlock(buffer, 0, buffer.Length));
}

private string Decrypt(string inputString)
{
    byte[] buffer = Convert.FromBase64String(inputString);
    TripleDESCryptoServiceProvider tripleDes = new TripleDESCryptoServiceProvider();
    MD5CryptoServiceProvider MD5 = new MD5CryptoServiceProvider();
    tripleDes.Key = MD5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(Key));
    tripleDes.IV = IVector;
    ICryptoTransform ITransform = tripleDes.CreateDecryptor();
    return Encoding.ASCII.GetString(ITransform.TransformFinalBlock(buffer, 0, buffer.Length));
}



//example 2

using System.Security.Cryptography;

public static string Encrypt(this string data, string key = @"0123456789\123456789!1234")
{
	TripleDESCryptoServiceProvider DES = new TripleDESCryptoServiceProvider()
	{
		Mode = CipherMode.ECB,
		Key = ASCIIEncoding.ASCII.GetBytes(key),
		Padding = PaddingMode.PKCS7
	};

	using (ICryptoTransform DESEncrypt = DES.CreateEncryptor())
	{
		Byte[] Buffer = ASCIIEncoding.ASCII.GetBytes(data);
		return Convert.ToBase64String(DESEncrypt.TransformFinalBlock(Buffer, 0, Buffer.Length));
	}
}

public static string Decrypt(this string data, string key = @"0123456789\123456789!1234")
{
	TripleDESCryptoServiceProvider DES = new TripleDESCryptoServiceProvider()
	{
		Mode = CipherMode.ECB,
		Key = ASCIIEncoding.ASCII.GetBytes(key),
		Padding = PaddingMode.PKCS7
	};

	using (ICryptoTransform DESEncrypt = DES.CreateDecryptor())
	{
		Byte[] Buffer = Convert.FromBase64String(data.Replace(" ", "+"));
		return Encoding.UTF8.GetString(DESEncrypt.TransformFinalBlock(Buffer, 0, Buffer.Length));
	}
}