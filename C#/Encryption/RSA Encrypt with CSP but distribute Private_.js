//http://hintdesk.com/c-rsa-encryption-and-decryption/
//call
RSAEngine.AssignNewKey();
string strClearText = "rongchaua";
string strEncryptText = RSAEngine.EncryptData(strClearText);
Console.WriteLine(strEncryptText);
string strDecryptText = RSAEngine.DecryptData(strEncryptText);
Console.WriteLine(strClearText);
Console.ReadLine();



private static RSACryptoServiceProvider m_rsaProvider;
public static void AssignParameter()
{
	const int PROVIDER_RSA_FULL = 1;
	const string CONTAINER_NAME = "RSAContainer";
	CspParameters cspParams;
	cspParams = new CspParameters(PROVIDER_RSA_FULL);
	cspParams.KeyContainerName = CONTAINER_NAME;
	cspParams.Flags = CspProviderFlags.UseMachineKeyStore;
	cspParams.ProviderName = "Microsoft Strong Cryptographic Provider";
	m_rsaProvider = new RSACryptoServiceProvider(1024, cspParams);
}

public static void AssignNewKey()
{
	AssignParameter();
	//provide public and private RSA params
	StreamWriter swWriter = new StreamWriter(@"privatekey.xml");
	string strPublicPrivateKeyXML = m_rsaProvider.ToXmlString(true);
	swWriter.Write(strPublicPrivateKeyXML);
	swWriter.Close();
	//provide public only RSA params
	swWriter = new StreamWriter(@"publickey.xml");
	string strPublicOnlyKeyXML = m_rsaProvider.ToXmlString(false);
	swWriter.Write(strPublicOnlyKeyXML);
	swWriter.Close();
}

public static string EncryptData(string strData2Encrypt)
{
	AssignParameter();
	StreamReader srReader = new StreamReader(@"publickey.xml");
	string strPublicOnlyKeyXML = srReader.ReadToEnd();
	m_rsaProvider.FromXmlString(strPublicOnlyKeyXML);
	srReader.Close();
	//read plaintext, encrypt it to ciphertext
	byte[] baPlainbytes = System.Text.Encoding.UTF8.GetBytes(strData2Encrypt);
	byte[] baCipherbytes = m_rsaProvider.Encrypt(baPlainbytes, false);
	return Convert.ToBase64String(baCipherbytes);
}
public static string DecryptData(string strData2Decrypt)
{
	AssignParameter();
	byte[] baGetPassword = Convert.FromBase64String(strData2Decrypt);
	StreamReader reader = new StreamReader(@"privatekey.xml");
	string publicPrivateKeyXML = reader.ReadToEnd();
	m_rsaProvider.FromXmlString(publicPrivateKeyXML);
	reader.Close();
	//read ciphertext, decrypt it to plaintext
	byte[] baPlain = m_rsaProvider.Decrypt(baGetPassword, false);
	return System.Text.Encoding.UTF8.GetString(baPlain);
}
