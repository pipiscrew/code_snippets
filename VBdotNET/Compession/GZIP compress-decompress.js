Dim PEArray() As Byte

PEArray = FileToByteArray(args(0))
PEArray = Compress(PEArray)

    Public Function FileToByteArray(ByVal FileName As String) As Byte()
        Dim PEArray() As Byte = Nothing
        ReDim PEArray(FileLen(FileName) - 1)
        Dim Free As Integer = FreeFile()
        FileOpen(Free, FileName, OpenMode.Binary, OpenAccess.Read)
        FileGet(Free, PEArray)
        FileClose(Free)
        Return PEArray
    End Function

    Public Function Compress(ByVal data() As Byte) As Byte()
        'create a new MemoryStream for holding and
        Dim output As New MemoryStream()
        'create a new GZipStream object for compressing
        Dim gzip As New GZipStream(output, CompressionMode.Compress, True)
        'write the compressed bytes to the underlying stream
        gzip.Write(data, 0, data.Length)
        'close the object
        gzip.Close()
        'convert the MemoryStream to an array and return
        'it to the calling method
        Return output.ToArray()
    End Function
    
    
    Public Sub ByteArrayToFile(ByVal ByteArray() As Byte, ByVal FileName As String)
        Dim Free As Integer = FreeFile()
        FileOpen(Free, FileName, OpenMode.Binary, OpenAccess.Write)
        FilePut(Free, ByteArray)
        FileClose(Free)
    End Sub
    
		public static byte[] Decompress(byte[] data)
		{
			//create a MemoryStream for holding the incoming data
			MemoryStream input = new MemoryStream();
			//write the incoming bytes to the MemoryStream
			input.Write(data, 0, data.Length);
			//set our position to the start of the Stream
			input.Position = 0;
			//create an instance of the GZipStream to decompress
			//the incoming byte array (the compressed ViewState)
			GZipStream gzip = new GZipStream(input, CompressionMode.Decompress, true);
			//create a new MemoryStream for holding
			//the output
			MemoryStream output = new MemoryStream();
			//create a byte array
			byte[] buff = new byte[64];
			int read = -1;
			//read the decompressed ViewState into
			//our byte array, set that value to our
			//read variable (int data type)
			read = gzip.Read(buff, 0, buff.Length);
			//make sure we have something to read
			while (read > 0)
			{
				//write the decompressed bytes to our
				//out going MemoryStream
				output.Write(buff, 0, read);
				//get the rest of the buffer
				read = gzip.Read(buff, 0, buff.Length);
			}
			gzip.Close();
			//return our out going MemoryStream
			//in an array
			return output.ToArray();
		}