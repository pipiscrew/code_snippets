//http://blogs.msdn.com/b/shawnfa/archive/2004/11/30/272558.aspx

-STATIC CLASS-
        [DllImport("mscoree.dll", EntryPoint = "StrongNameGetPublicKey",
           SetLastError = true, CharSet = CharSet.Unicode, ExactSpelling = true,
           CallingConvention = CallingConvention.StdCall)]
        private static extern bool StrongNameGetPublicKey(
          string wszKeyContainer,    // [in] desired key container name
          [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 3)]
      byte[] pbKeyBlob,          // [in] public/private key blob (optional)
          int cbKeyBlob,
          [Out] out IntPtr ppbPublicKeyBlob,   // [out] public key blob
          [Out] out int pcbPublicKeyBlob);

        [DllImport("mscoree.dll")]
        private extern static void StrongNameFreeBuffer(IntPtr pbMemory);

        public static byte[] ExtractPublicKey(string keyContainer, byte[] keyBlob)
        {
           
            // extract the public key portion of the blob
            IntPtr publicKeyBuffer = IntPtr.Zero;
            try
            {
                int publicKeyBlobSize = 0;

                if (!StrongNameGetPublicKey(
                            keyContainer,
                            keyBlob,
                            (keyBlob == null) ? 0 : keyBlob.Length,
                            out publicKeyBuffer,
                            out publicKeyBlobSize))
                {
                    MessageBox.Show("ERROR");
                }

                // copy the key out of unmanaged memory, and return it 
                byte[] publicKeyBlob = new byte[publicKeyBlobSize];
                Marshal.Copy(publicKeyBuffer, publicKeyBlob, 0, publicKeyBlobSize);
                return publicKeyBlob;
            }
            finally
            {
                if (publicKeyBuffer != IntPtr.Zero)
                    StrongNameFreeBuffer(publicKeyBuffer);
            }
        }

        [DllImport("mscoree.dll", EntryPoint = "StrongNameTokenFromPublicKey", CharSet = CharSet.Auto)]
        public static extern bool StrongNameTokenFromPublicKey(byte[] pbPublicKeyBlob, int cbPublicKeyBlob, out IntPtr ppbStrongNameToken, out int pcbStrongNameToken);

        public static byte[] CreateTokenFromPublicKey(byte[] publicKey)
        {
            if (publicKey == null)
                throw new ArgumentNullException("publicKey");

            IntPtr tokenPointer = IntPtr.Zero;
            int tokenSize = 0;

            // generate the token
            bool createdToken = StrongNameTokenFromPublicKey(
                publicKey,
                (int)publicKey.Length,
                out tokenPointer,
                out tokenSize);

            try
            {
                // if there was a problem, translate it and report it
                if (!createdToken || tokenPointer == IntPtr.Zero)
                    MessageBox.Show("1!");

                // make sure the key size makes sense
                //Debug.Assert(tokenSize > 0 && tokenSize <= Int32.MaxValue);
                if (tokenSize <= 0 || tokenSize > Int32.MaxValue)
                    MessageBox.Show("2!");

                // get the key into managed memory
                byte[] token = new byte[tokenSize];
                Marshal.Copy(tokenPointer, token, 0, tokenSize);
                return token;
            }
            finally
            {
                // release the token memory
                if (tokenPointer != IntPtr.Zero)
                    StrongNameFreeBuffer(tokenPointer);
            }
        }
        
        
-FORM-
            byte[] tmp;
            tmp = ExtractPublicKey(null, File.ReadAllBytes(@"c:\veteran.snk"));
            tmp = CreateTokenFromPublicKey(tmp);
            MessageBox.Show(BitConverter.ToString(tmp).Replace("-","").ToLower());