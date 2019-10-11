'source :
'http://www.cnblogs.com/flarejune/archive/2008/10/16/1312993.html


        [DllImport("mscoree.dll", EntryPoint = "StrongNameKeyDelete", CharSet = CharSet.Auto)]
        public static extern bool StrongNameKeyDelete(string wszKeyContainer);

        [DllImport("mscoree.dll", EntryPoint = "StrongNameKeyInstall", CharSet = CharSet.Auto)]
        public static extern bool StrongNameKeyInstall([MarshalAs(UnmanagedType.LPWStr)] string wszKeyContainer,
                                                       [MarshalAs(UnmanagedType.LPArray, SizeParamIndex = 2,
                                                           SizeConst = 0)] byte[] pbKeyBlob, int arg0);

        [DllImport("mscoree.dll", EntryPoint = "StrongNameSignatureGeneration", CharSet = CharSet.Auto)]
        public static extern bool StrongNameSignatureGeneration(string wszFilePath, string wszKeyContainer,
                                                                IntPtr pbKeyBlob, int cbKeyBlob, int ppbSignatureBlob,
                                                                int pcbSignatureBlob);

        [DllImport("mscoree.dll", EntryPoint = "StrongNameErrorInfo", CharSet = CharSet.Auto)]
        public static extern uint StrongNameErrorInfo();

        [DllImport("mscoree.dll", EntryPoint = "StrongNameTokenFromPublicKey", CharSet = CharSet.Auto)]
        public static extern bool StrongNameTokenFromPublicKey(byte[] pbPublicKeyBlob, int cbPublicKeyBlob,
                                                               out IntPtr ppbStrongNameToken, out int pcbStrongNameToken);

        [DllImport("mscoree.dll", EntryPoint = "StrongNameFreeBuffer", CharSet = CharSet.Auto)]
        public static extern void StrongNameFreeBuffer(IntPtr pbMemory);