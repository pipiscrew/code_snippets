//generate keys
        private void button1_Click(object sender, EventArgs e)
        {
            RSACryptoServiceProvider RSAcsp = new RSACryptoServiceProvider(1024);
            string priv =  RSAcsp.ToXmlString(true);
            string publ =  RSAcsp.ToXmlString(false);

            File.WriteAllText(Application.StartupPath + "\\" + textBox1.Text + "-PrivateKey.xml", priv);

            File.WriteAllText(Application.StartupPath + "\\" + textBox1.Text + "-PublicKey.xml", publ);

            MessageBox.Show("The Key pair created successfully!");
            this.DialogResult = System.Windows.Forms.DialogResult.OK;
        }
        

//create RSA encrypted string signature
            RSACryptoServiceProvider rsaPublicOnly = new RSACryptoServiceProvider(1024);

            rsaPublicOnly.FromXmlString(File.ReadAllText(Application.StartupPath + "\\" + cmbSoftware.Text + "-PrivateKey.xml"));

            SHA1CryptoServiceProvider SHA = new SHA1CryptoServiceProvider();
            RSAPKCS1SignatureFormatter Fmt = new RSAPKCS1SignatureFormatter(rsaPublicOnly);
            Fmt.SetHashAlgorithm("SHA1");
            byte[] buff = new UnicodeEncoding().GetBytes(textBox1.Text);

            byte[] hash = SHA.ComputeHash(buff, 0, buff.Length);
            textBox2.Text = ByteToBase64String(Fmt.CreateSignature(hash));
        
//verify signature
            RSACryptoServiceProvider rsaPublicOnly = new RSACryptoServiceProvider(1024);
            rsaPublicOnly.FromXmlString(File.ReadAllText(Application.StartupPath + "\\" + cmbSoftware.Text + "-PublicKey.xml"));

            SHA1CryptoServiceProvider SHA = new SHA1CryptoServiceProvider();
            RSAPKCS1SignatureDeformatter Defmt = new RSAPKCS1SignatureDeformatter(rsaPublicOnly);
            Defmt.SetHashAlgorithm("SHA1");

            //byte[] orig = new UnicodeEncoding().GetBytes(textBox1.Text);
            byte[] orig = new UnicodeEncoding().GetBytes(Application.ProductName);

            byte[] signed = Base64StringToByte(textBox2.Text);
            byte[] hash = SHA.ComputeHash(orig, 0, orig.Length);


            MessageBox.Show(Defmt.VerifySignature(hash, signed).ToString()); 
            
//help procs
        public string ByteToBase64String(byte[] bytes)
        {
            if ((bytes == null) || (bytes.Length < 1)) return null;
            return Convert.ToBase64String(bytes);
        }

        public byte[] Base64StringToByte(string s)
        {
            if ((s == null) || (s.Length < 1)) return null;
            return Convert.FromBase64String(s);
        }