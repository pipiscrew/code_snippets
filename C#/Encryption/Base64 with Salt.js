//http://geekswithblogs.net/Nettuce/archive/2012/06/14/salt-and-hash-a-password-in.net.aspx
  public class SaltedHash
    {
        public string Hash { get; private set; }
        public string Salt { get; private set; }
 
        public SaltedHash(string password)
        {
            var saltBytes = new byte[32];
            new RNGCryptoServiceProvider().GetNonZeroBytes(saltBytes);
            Salt = ConvertToBase64String(saltBytes);
            var passwordAndSaltBytes = Concat(password, saltBytes);
            Hash = ComputeHash(passwordAndSaltBytes);
        }
 
        static string ConvertToBase64String(byte[] bytes)
        {
            return Convert.ToBase64String(bytes);
        }
 
        static string ComputeHash(byte[] bytes)
        {
            return ConvertToBase64String(SHA256.Create().ComputeHash(bytes));
        }
 
        static byte[] Concat(string password, byte[] saltBytes)
        {
            var passwordBytes = Encoding.UTF8.GetBytes(password);
            return passwordBytes.Concat(saltBytes).ToArray();
        }
 
        public static bool Verify(string salt, string hash, string password)
        {
            var saltBytes = Convert.FromBase64String(salt);
            var passwordAndSaltBytes = Concat(password, saltBytes);
            var hashAttempt = ComputeHash(passwordAndSaltBytes);
            return hash == hashAttempt;
        }
    }