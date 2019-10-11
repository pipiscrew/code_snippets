//https://github.com/ioncodes/CryptoScript/blob/master/CryptoScript/CryptoScript.Classes/SHA.cs

using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace CryptoScript.Classes
{
    public class SHA
    {
        public static string GenSHA256(string data)
        {
            var message = Encoding.UTF8.GetBytes(data);
            SHA256Managed hashString = new SHA256Managed();

            var hashValue = hashString.ComputeHash(message);
            return hashValue.Aggregate("", (current, x) => current + $"{x:x2}");
        }
    }
}