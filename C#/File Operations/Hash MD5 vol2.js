//http://sharpertutorials.com/calculate-md5-checksum-file/

protected string GetMD5HashFromFile(string fileName)
{
  FileStream file = new FileStream(fileName, FileMode.Open);
  MD5 md5 = new MD5CryptoServiceProvider();
  byte[] retVal = md5.ComputeHash(file);
  file.Close();
 
  StringBuilder sb = new StringBuilder();
  for (int i = 0; i < retVal.Length; i++)
  {
    sb.Append(retVal[i].ToString("x2"));
  }
  return sb.ToString();
}

//from string
//http://blogs.msdn.com/b/csharpfaq/archive/2006/10/09/how-do-i-calculate-a-md5-hash-from-a-string_3f00_.aspx
        public string CalculateMD5Hash(string input)
        {
            // step 1, calculate MD5 hash from input
            MD5 md5 = System.Security.Cryptography.MD5.Create();
            byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
            byte[] hash = md5.ComputeHash(inputBytes);

            // step 2, convert byte array to hex string
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }
            return sb.ToString();
        }
        
 //using FileStream
		 protected string GetMD5HashFromFile(string fileName)
		{
		  FileStream file = new FileStream(fileName, FileMode.Open);
		  MD5 md5 = new MD5CryptoServiceProvider();
		  byte[] retVal = md5.ComputeHash(file);
		  file.Close();
		
		  StringBuilder sb = new StringBuilder();
		  for (int i = 0; i < retVal.Length; i++)
		  {
		    sb.Append(retVal[i].ToString("x2"));
		  }
		  return sb.ToString();
		}