'button compress

        Dim sr As String = My.Computer.FileSystem.ReadAllText("C:\ExtractedResource\readme1.txt", System.Text.Encoding.UTF8)
        Dim co As Byte()
        co = CompressSTR(sr)

        ByteArrayToFile(co, "C:\ExtractedResource\readme1COb.txt")
        
        
'button uncompress

            Dim stream As IO.FileStream = IO.File.OpenRead("C:\ExtractedResource\readme1COb.txt")
            Dim buffer = New Byte(stream.Length - 1) {}
            stream.Read(buffer, 0, buffer.Length)
            stream.Close()

            
            Dim tmp$
            tmp = DeCompress(buffer)
            
            
            
    Public Function CompressSTR(ByVal uncompressedString As String) As Byte()
        Dim bytData As Byte() = System.Text.Encoding.UTF8.GetBytes(uncompressedString)
        Dim ms As New MemoryStream()
        Dim s As Stream = New DeflateStream(ms, CompressionMode.Compress)
        s.Write(bytData, 0, bytData.Length)
        s.Close()

        Return DirectCast(ms.ToArray(), Byte())
    End Function
    
    
    
    Public Function DeCompress(ByVal compressedString As Byte()) As String
        'Dim bytInput As Byte() = System.Convert.FromBase64String(compressedString)
        Dim ms As MemoryStream = New MemoryStream(compressedString)
        Dim ds As Compression.DeflateStream = New Compression.DeflateStream(ms, Compression.CompressionMode.Decompress) 'New Compression.DeflateStream(ms, Compression.CompressionMode.Decompress)

        Dim buffer As Byte() = New Byte(1023) {}        'New Byte(0) {}
        Dim encoding As System.Text.Encoding = System.Text.Encoding.UTF8
        Dim output As String

        Dim stream As MemoryStream = New MemoryStream

        Dim num As Integer
        Do 'While (num = ds.Read(buffer, 0, buffer.Length) <> 0)
            num = ds.Read(buffer, 0, buffer.Length)
            stream.Write(buffer, 0, num)
        Loop Until num = 0

        stream.Seek(0, SeekOrigin.Begin)

        Dim reader As New StreamReader(stream, encoding)
        output = reader.ReadToEnd

        stream.Close()
        stream.Dispose()

        reader.Close()
        reader.Dispose()

        Return output
    End Function