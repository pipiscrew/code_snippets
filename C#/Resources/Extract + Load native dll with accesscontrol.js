
        [DllImport("kernel32.dll")]
        static extern IntPtr LoadLibraryA(string hModule);

        internal static IntPtr Load()
        {
            IntPtr ptr;
          
            WindowsImpersonationContext context = null;
            try
            {
                context = WindowsIdentity.Impersonate(IntPtr.Zero);
                Assembly executingAssembly = Assembly.GetExecutingAssembly();
                string name = null;
                string str2 = null;
                if (IntPtr.Size == 4)
                {
                    name = "3c622eb9-2e5f-4a53-b18e-226db1006837";
                    str2 = "ufmod";
                }
                else
                {
                    return IntPtr.Zero;
                }

                byte[] buffer = null;
                string path = string.Format(@"{0}{1}\", Path.GetTempPath(), name);
                Directory.CreateDirectory(path);
                string str4 = path + str2 + ".dll";
                if (System.IO.File.Exists(str4) == false)
                {
                    buffer = ReadfromResources("XMPlay.ufmod.dll");

                    if (buffer.Length == 0)
                        return IntPtr.Zero; ;

                    System.IO.FileStream stream3 = System.IO.File.Create(str4);
                    stream3.Write(buffer, 0, buffer.Length);
                    stream3.Close();
                }

                if (!File.Exists(str4))
                {
                    FileStream stream2 = File.OpenWrite(str4);
                    stream2.Write(buffer, 0, buffer.Length);
                    stream2.Close();
                    FileSystemAccessRule rule = new FileSystemAccessRule(new SecurityIdentifier("S-1-1-0"), FileSystemRights.ReadAndExecute, AccessControlType.Allow);
                    FileSecurity accessControl = File.GetAccessControl(str4);
                    accessControl.AddAccessRule(rule);
                    File.SetAccessControl(str4, accessControl);
                }
                ptr = LoadLibraryA(str4);
            }
            finally
            {
                if (context!=null)
                    context.Undo();
            }
            
            return ptr;
        }

        private static byte[] ReadfromResources(string filename)
        {
            byte[] Buffer;
            using (Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(filename))
            {
                Buffer = new byte[stream.Length];
                stream.Read(Buffer, 0, Buffer.Length);
            }

            return Buffer;
        }