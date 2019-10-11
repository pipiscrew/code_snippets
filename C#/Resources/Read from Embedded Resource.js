
        private string ReadASCIIfromResources(string filename)
        {
            byte[] Buffer;
            using (Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(filename))
            {
                Buffer = new byte[stream.Length];
                stream.Read(Buffer, 0, Buffer.Length);
            }

            return Encoding.ASCII.GetString(Buffer);
        }
        
//utf8

	    General.Mes(ReadUTF8fromResources("SQLiteManager.ResourcesPHP.index.php"));

        private string ReadUTF8fromResources(string filename)
        {
            byte[] Buffer;
            using (Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(filename))
            {
                Buffer = new byte[stream.Length];
                stream.Read(Buffer, 0, Buffer.Length);
            }

            return Encoding.UTF8.GetString(Buffer);
        }