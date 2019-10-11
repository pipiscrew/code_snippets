		public static byte[] Compress(byte[] data)
        {
            var compressedStream = new MemoryStream();
            var zipStream = new GZipStream(compressedStream, CompressionMode.Compress);
            zipStream.Write(data, 0, data.Length);
            zipStream.Close();
            return compressedStream.ToArray();
        }

        public static byte[] Decompress(byte[] data)
        {
            var compressedStream = new MemoryStream(data);
            var zipStream = new GZipStream(compressedStream, CompressionMode.Decompress);
            var resultStream = new MemoryStream();

            var buffer = new byte[4096];
            int read;

            while ((read = zipStream.Read(buffer, 0, buffer.Length)) > 0)
            {
                resultStream.Write(buffer, 0, read);
            }

            return resultStream.ToArray();
        }
        
        
        
            byte[] buffer = Compress(System.IO.File.ReadAllBytes(@"E:\dow\uPPP.v0.7\Templates\BabyDemon\demonBaby.mod"));
            System.IO.File.WriteAllBytes(@"d:\1.dat", buffer);
            
            
            
                stream = System.Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream("WindowsFormsApplication63.music.dat");

                buffer = new byte[stream.Length];
                stream.Read(buffer, 0, buffer.Length);
                stream.Close();

                buffer = Decompress(buffer);