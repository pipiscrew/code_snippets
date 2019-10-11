        public static string getFileMd5(string filePath)
        {
            // get all the file contents
            byte[] File = System.IO.File.ReadAllBytes(filePath);

            // create a new md5 object
            MD5CryptoServiceProvider Md5 = new MD5CryptoServiceProvider();

            // compute the hash
            byte[] byteHash = Md5.ComputeHash(File);

            // return the value in base 64
            return Convert.ToBase64String(byteHash);
        }