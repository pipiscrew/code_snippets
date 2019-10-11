        public static string md5(string str)
        {
            using (var md5 = MD5.Create())
            {
                return Encoding.Default.GetString(md5.ComputeHash(System.Text.Encoding.ASCII.GetBytes(str)));
            }
        }