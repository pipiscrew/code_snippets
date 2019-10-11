
    Public Function CompressSTR(ByVal uncompressedString As String) As String
        Dim bytData As Byte() = System.Text.Encoding.UTF8.GetBytes(uncompressedString)
        Dim ms As New MemoryStream()
        Dim s As Stream = New DeflateStream(ms, CompressionMode.Compress)
        s.Write(bytData, 0, bytData.Length)
        s.Close()
        Dim compressedData As Byte() = DirectCast(ms.ToArray(), Byte())
        Return System.Convert.ToBase64String(compressedData, 0, compressedData.Length)
    End Function
    
    
    
    Public Function DeCompress(ByVal compressedString As String) As String
        Dim bytInput As Byte() = System.Convert.FromBase64String(compressedString)
        Dim ms As MemoryStream = New MemoryStream(bytInput)
        Dim ds As Compression.DeflateStream = New Compression.DeflateStream(ms, Compression.CompressionMode.Decompress) 'New Compression.DeflateStream(ms, Compression.CompressionMode.Decompress)

        Dim buffer As Byte() = New Byte(1023) {} 'New Byte(&H400  - 1) {}
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