//https://utilities.svn.codeplex.com/svn/trunk/Src/Newtonsoft.Utilities/Miscellaneous/EncryptionUtils.cs

using System;
using System.Collections.Generic;
using System.Text;
using System.Security.Cryptography;
using System.IO;

namespace Newtonsoft.Utilities.Miscellaneous
{
  public static class EncryptionUtils
  {
    public static byte[] GenerateKey()
    {
      RijndaelManaged provider = new RijndaelManaged();
      provider.GenerateKey();

      return provider.Key;
    }

    public static byte[] GenerateIV()
    {
      RijndaelManaged provider = new RijndaelManaged();
      provider.GenerateIV();

      return provider.IV;
    }

    public static string Decrypt(byte[] encryptedBytes, byte[] key, byte[] iv)
    {
      RijndaelManaged provider = new RijndaelManaged();

      MemoryStream ms = new MemoryStream();

      using (CryptoStream cryptoStream = new CryptoStream(ms, provider.CreateDecryptor(key, iv), CryptoStreamMode.Write))
      {
        cryptoStream.Write(encryptedBytes, 0, encryptedBytes.Length);
      }

      return Encoding.UTF8.GetString(ms.ToArray());
    }

    public static byte[] Encrypt(string value, byte[] key, byte[] iv)
    {
      RijndaelManaged provider = new RijndaelManaged();
      byte[] valueBytes = Encoding.UTF8.GetBytes(value);

      MemoryStream ms = new MemoryStream();

      using (CryptoStream cryptoStream = new CryptoStream(ms, provider.CreateEncryptor(key, iv), CryptoStreamMode.Write))
      {
        cryptoStream.Write(valueBytes, 0, valueBytes.Length);
      }

      return ms.ToArray();
    }
  }
}