//http://www.superstarcoders.com/blogs/posts/symmetric-encryption-in-c-sharp.aspx

//AES Example
//The cipher utility accepts a generic parameter. Use AesManaged for AES encryption:
string plain = "Something you want to keep private with AES";
string encrypted = CipherUtility.Encrypt<AesManaged>(plain, "password", "salt");
string decrypted = CipherUtility.Decrypt<AesManaged>(encrypted, "password", "salt");


//Triple DES Example
//At the moment, there's no managed version of Triple DES built into the .NET library, so you'll have to use the TripleDESCryptoServiceProvider with the cipher utility:
string plain = "Something you want to keep private with Triple DES";
string encrypted = CipherUtility.Encrypt<TripleDESCryptoServiceProvider>(plain, "password", "salt");
string decrypted = CipherUtility.Decrypt<TripleDESCryptoServiceProvider>(encrypted, "password", "salt");


//Rijndael Example
//Definitely the symmetric encryption algorithm with the best name, use RijndaelManaged to leverage it:
string plain = "Something you want to keep private with Rijndael";
string encrypted = CipherUtility.Encrypt<RijndaelManaged>(plain, "password", "salt");
string decrypted = CipherUtility.Decrypt<RijndaelManaged>(encrypted, "password", "salt");

//class

using System;
using System.Text;
using System.Security.Cryptography;
using System.IO;

public class CipherUtility
{
   public static string Encrypt<T>(string value, string password, string salt)
        where T : SymmetricAlgorithm, new()
   {
      DeriveBytes rgb = new Rfc2898DeriveBytes(password, Encoding.Unicode.GetBytes(salt));

      SymmetricAlgorithm algorithm = new T();

      byte[] rgbKey = rgb.GetBytes(algorithm.KeySize >> 3);
      byte[] rgbIV = rgb.GetBytes(algorithm.BlockSize >> 3);

      ICryptoTransform transform = algorithm.CreateEncryptor(rgbKey, rgbIV);

      using (MemoryStream buffer = new MemoryStream())
      {
         using (CryptoStream stream = new CryptoStream(buffer, transform, CryptoStreamMode.Write))
         {
            using (StreamWriter writer = new StreamWriter(stream, Encoding.Unicode))
            {
               writer.Write(value);
            }
         }

         return Convert.ToBase64String(buffer.ToArray());
      }
   }

   public static string Decrypt<T>(string text, string password, string salt)
      where T : SymmetricAlgorithm, new()
   {
      DeriveBytes rgb = new Rfc2898DeriveBytes(password, Encoding.Unicode.GetBytes(salt));

      SymmetricAlgorithm algorithm = new T();

      byte[] rgbKey = rgb.GetBytes(algorithm.KeySize >> 3);
      byte[] rgbIV = rgb.GetBytes(algorithm.BlockSize >> 3);

      ICryptoTransform transform = algorithm.CreateDecryptor(rgbKey, rgbIV);

      using (MemoryStream buffer = new MemoryStream(Convert.FromBase64String(text)))
      {
         using (CryptoStream stream = new CryptoStream(buffer, transform, CryptoStreamMode.Read))
         {
            using (StreamReader reader = new StreamReader(stream, Encoding.Unicode))
            {
               return reader.ReadToEnd();
            }
         }
      }
   }
}