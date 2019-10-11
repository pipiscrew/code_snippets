//http://stputils.codeplex.com/

public static class StringExtensions
{
    // Fields
    private const int AesIterations = 2;
    private const int AesSaltSize = 10;
    private static MD5 Md5Algorithm = MD5.Create();
    private static Random Randomizer = new Random();
    private static SHA1 Sha1Algorithm = new SHA1Managed();

    // Methods
    public static string DecryptAes(this string cipherText, string passPhrase)
    {
        string str;
        byte[] rfcBytes = passPhrase.GetRfcBytes();
        byte[] buffer = Convert.FromBase64String(cipherText);
        using (AesManaged managed = new AesManaged())
        {
            managed.Key = rfcBytes;
            managed.IV = rfcBytes;
            using (MemoryStream stream = null)
            {
                stream = new MemoryStream();
                CryptoStream stream2 = new CryptoStream(stream, managed.CreateDecryptor(), CryptoStreamMode.Write);
                stream2.Write(buffer, 0, buffer.Length);
                stream2.Flush();
                stream2.Close();
                byte[] bytes = null.ToArray();
                str = Encoding.UTF8.GetString(bytes, 0, bytes.Length).Trim();
            }
        }
        return str;
    }

    public static string EncryptAes(this string plainText, string passPhrase)
    {
        string str;
        byte[] rfcBytes = passPhrase.GetRfcBytes();
        byte[] bytes = Encoding.UTF8.GetBytes(plainText);
        using (AesManaged managed = new AesManaged())
        {
            managed.Key = rfcBytes;
            managed.IV = rfcBytes;
            using (MemoryStream stream = null)
            {
                stream = new MemoryStream();
                CryptoStream stream2 = new CryptoStream(stream, managed.CreateEncryptor(), CryptoStreamMode.Write);
                stream2.Write(bytes, 0, bytes.Length);
                stream2.Flush();
                stream2.Close();
                str = Convert.ToBase64String(null.ToArray());
            }
        }
        return str;
    }

    public static string EncryptMd5Base64(this string str)
    {
        return EncryptToBase64(str, Md5Algorithm);
    }

    public static string EncryptMd5Hex(this string str)
    {
        return EncryptToHex(str, Md5Algorithm);
    }

    public static string EncryptPassword(this string clean, string salt)
    {
        if (string.IsNullOrEmpty(clean))
        {
            throw new ArgumentNullException("clean", "Parameter is empty");
        }
        if (string.IsNullOrEmpty(salt))
        {
            throw new EmptySaltException();
        }
        int num = (salt.Length <= 10) ? 20 : (salt.Length * 2);
        string str = clean.EncryptSha1Base64();
        str = salt + str + salt;
        while (num-- > 0)
        {
            str = str.EncryptSha1Base64();
        }
        return str;
    }

    public static string EncryptSha1Base64(this string str)
    {
        return EncryptToBase64(str, Sha1Algorithm);
    }

    public static string EncryptSha1Hex(this string str)
    {
        return EncryptToHex(str, Sha1Algorithm);
    }

    private static string EncryptToBase64(string clean, HashAlgorithm algorithm)
    {
        if (string.IsNullOrEmpty(clean))
        {
            return null;
        }
        byte[] bytes = Encoding.UTF8.GetBytes(clean);
        algorithm.ComputeHash(bytes);
        return Convert.ToBase64String(algorithm.Hash);
    }

    private static string EncryptToHex(string clean, HashAlgorithm hash)
    {
        if (string.IsNullOrEmpty(clean))
        {
            return null;
        }
        byte[] bytes = Encoding.UTF8.GetBytes(clean);
        hash.ComputeHash(bytes);
        return BitConverter.ToString(hash.Hash).Replace("-", string.Empty).ToLower();
    }

    public static string GenerateFriendlyString(this string str, [Optional, DefaultParameterValue(8)] int size)
    {
        int length = "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz".Length;
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < size; i++)
        {
            builder.Append("23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz"[Randomizer.Next(length)]);
        }
        return builder.ToString();
    }

    public static string GenerateString(this string str, [Optional, DefaultParameterValue(8)] int length)
    {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < length; i++)
        {
            builder.Append(Convert.ToChar(Randomizer.Next(0x21, 0x7e)));
        }
        return builder.ToString();
    }

    public static string GenerateUniqueString(this string str, [Optional, DefaultParameterValue(8)] int size)
    {
        char[] chArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".ToCharArray();
        byte[] data = new byte[size];
        using (RNGCryptoServiceProvider provider = new RNGCryptoServiceProvider())
        {
            provider.GetBytes(data);
        }
        StringBuilder builder = new StringBuilder(size);
        foreach (byte num in data)
        {
            builder.Append(chArray[num % chArray.Length]);
        }
        return builder.ToString();
    }

    private static byte[] GetRfcBytes(this string hashKey)
    {
        byte[] salt = new UTF8Encoding().GetBytes(hashKey);
        using (Rfc2898DeriveBytes bytes = new Rfc2898DeriveBytes(hashKey, salt))
        {
            return bytes.GetBytes(0x10);
        }
    }

    public static bool IsInteger(this string str)
    {
        if (string.IsNullOrWhiteSpace(str))
        {
            return false;
        }
        long result = 0;
        return long.TryParse(str, out result);
    }

    public static bool IsNumeric(this string str)
    {
        if (str.IsInteger())
        {
            return true;
        }
        if (string.IsNullOrWhiteSpace(str))
        {
            return false;
        }
        decimal result = 0M;
        return decimal.TryParse(str, out result);
    }

    public static bool ToBool(this string str, [Optional, DefaultParameterValue(false)] bool defaultValue)
    {
        bool result = defaultValue;
        if (!bool.TryParse(str, out result))
        {
            return defaultValue;
        }
        return result;
    }

    public static byte ToByte(this string str, [Optional, DefaultParameterValue(0)] byte defaultValue)
    {
        byte result = defaultValue;
        if (!byte.TryParse(str, out result))
        {
            return defaultValue;
        }
        return result;
    }

    public static decimal ToDecimal(this string str, [Optional, DecimalConstant(0, 0, (uint) 0, (uint) 0, (uint) 0)] decimal defaultValue)
    {
        decimal result = defaultValue;
        if (!decimal.TryParse(str, out result))
        {
            return defaultValue;
        }
        return result;
    }

    public static double ToDouble(this string str, [Optional, DefaultParameterValue(0.0)] double defaultValue)
    {
        double maxValue = double.MaxValue;
        if (str.Equals(maxValue.ToString()))
        {
            return double.MaxValue;
        }
        double minValue = double.MinValue;
        if (str.Equals(minValue.ToString()))
        {
            return double.MinValue;
        }
        double result = defaultValue;
        if (!double.TryParse(str, out result))
        {
            return defaultValue;
        }
        return result;
    }

    public static float ToFloat(this string str, [Optional, DefaultParameterValue(0f)] float defaultValue)
    {
        float maxValue = float.MaxValue;
        if (str.Equals(maxValue.ToString()))
        {
            return float.MaxValue;
        }
        float minValue = float.MinValue;
        if (str.Equals(minValue.ToString()))
        {
            return float.MinValue;
        }
        float result = defaultValue;
        if (!float.TryParse(str, out result))
        {
            return defaultValue;
        }
        return result;
    }

    public static int ToInt(this string str, [Optional, DefaultParameterValue(0)] int defaultValue)
    {
        int result = defaultValue;
        if (!int.TryParse(str, out result))
        {
            return defaultValue;
        }
        return result;
    }

    public static long ToLong(this string str, [Optional, DefaultParameterValue(0L)] long defaultValue)
    {
        long result = defaultValue;
        if (!long.TryParse(str, out result))
        {
            return defaultValue;
        }
        return result;
    }

    public static short ToShort(this string str, [Optional, DefaultParameterValue(0)] short defaultValue)
    {
        short result = defaultValue;
        if (!short.TryParse(str, out result))
        {
            return defaultValue;
        }
        return result;
    }

    public static uint ToUInt(this string str, [Optional, DefaultParameterValue(0)] uint defaultValue)
    {
        uint result = defaultValue;
        if (!uint.TryParse(str, out result))
        {
            return defaultValue;
        }
        return result;
    }

    public static ulong ToULong(this string str, [Optional, DefaultParameterValue(0L)] ulong defaultValue)
    {
        ulong result = defaultValue;
        if (!ulong.TryParse(str, out result))
        {
            return defaultValue;
        }
        return result;
    }

    public static ushort ToUShort(this string str, [Optional, DefaultParameterValue(0)] ushort defaultValue)
    {
        ushort result = defaultValue;
        ushort.TryParse(str, out result);
        return result;
    }
}

 
Collapse Methods
 
