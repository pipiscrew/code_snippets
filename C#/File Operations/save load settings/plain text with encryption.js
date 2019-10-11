//load
            try {
            if (File.Exists(Application.StartupPath + "\\PushTester.db"))
            {
                string fl = File.ReadAllText(Application.StartupPath + "\\PushTester.db");
                string[] flcontent = Regex.Split(fl, "\r\n");

                if (flcontent.Length == 2)
                {
                    txtAPIkey.Text = Decrypt(flcontent[0]);
                    txtDeviceID.Text = Decrypt(flcontent[1]);
                }
            }
                      }
            catch { }
            
        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            try
            {
                if (txtAPIkey.Text.Length > 0 && txtDeviceID.Text.Length > 0)
                {

                    string flcontent = Encrypt(txtAPIkey.Text) + "\r\n" + Encrypt(txtDeviceID.Text);
                    File.WriteAllText(Application.StartupPath + "\\PushTester.db", flcontent);

                }
            }
            catch { }
        }
        

        private static string Key = "G5AkXe71";
        private static readonly byte[] IVector = new byte[8] { 27, 9, 45, 27, 0, 72, 171, 54 };

        public static string Encrypt(string inputString)
        {
            if (inputString.Trim().Length == 0)
                return "";

            byte[] buffer = Encoding.ASCII.GetBytes(inputString);
            TripleDESCryptoServiceProvider tripleDes = new TripleDESCryptoServiceProvider();
            MD5CryptoServiceProvider MD5 = new MD5CryptoServiceProvider();
            tripleDes.Key = MD5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(Key));
            tripleDes.IV = IVector;
            ICryptoTransform ITransform = tripleDes.CreateEncryptor();
            return Convert.ToBase64String(ITransform.TransformFinalBlock(buffer, 0, buffer.Length));
        }

        public static string Decrypt(string inputString)
        {
            if (inputString.Trim().Length == 0)
                return "";

            byte[] buffer = Convert.FromBase64String(inputString);
            TripleDESCryptoServiceProvider tripleDes = new TripleDESCryptoServiceProvider();
            MD5CryptoServiceProvider MD5 = new MD5CryptoServiceProvider();
            tripleDes.Key = MD5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(Key));
            tripleDes.IV = IVector;
            ICryptoTransform ITransform = tripleDes.CreateDecryptor();
            return Encoding.ASCII.GetString(ITransform.TransformFinalBlock(buffer, 0, buffer.Length));
        }

