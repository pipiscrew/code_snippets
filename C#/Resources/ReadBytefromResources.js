        private byte[] ReadfromResources(string filename)
        {
            byte[] Buffer;
            using (Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(filename))
            {
                Buffer = new byte[stream.Length];
                stream.Read(Buffer, 0, Buffer.Length);
            }

            //System.IO.Stream stream = null;

            //stream = System.Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream(filename);
            //Buffer = new byte[stream.Length];
            //stream.Read(Buffer, 0, Buffer.Length);
            //stream.Close();
            //stream.Dispose();

            return Buffer;
        }
        
        
ex.
byte[] buffer = null;
buffer = ReadfromResources("P.BASSMOD.dll");