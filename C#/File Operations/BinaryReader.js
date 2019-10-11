//read specific file pos to byte[]
//binaryreader is faster than streamreader

        private byte[] FindASSrefPosition()
        {
            byte[] tmpARR;
            using (BinaryReader b = new BinaryReader(File.Open(textBox1.Text, FileMode.Open)))
            {
                b.BaseStream.Position = BLOBstart;
                tmpARR=b.ReadBytes((int)(BLOBend - BLOBstart));
            }

            return tmpARR;
        }
        
        
//http://www.dotnetperls.com/binaryreader
//http://msdn.microsoft.com/en-us/library/system.io.binaryreader.readbytes.aspx
	using (BinaryReader b = new BinaryReader(File.Open("file.bin", FileMode.Open)))
	{
	    // 2.
	    // Position and length variables.
	    int pos = 0;
	    // 2A.
	    // Use BaseStream.
	    int length = (int)b.BaseStream.Length;
	    while (pos < length)
	    {
		// 3.
		// Read integer.
		int v = b.ReadInt32();
		Console.WriteLine(v);

		// 4.
		// Advance our position variable.
		pos += sizeof(int);
	    }
	}