Imports System.IO.Compression

    Public Function Compress(ByVal uncompressedString As String) As String
        Dim bytData As Byte() = System.Text.Encoding.UTF8.GetBytes(uncompressedString)
        Dim ms As New MemoryStream()
        Dim s As Stream = New DeflateStream(ms, CompressionMode.Compress)
        s.Write(bytData, 0, bytData.Length)
        s.Close()
        Dim compressedData As Byte() = DirectCast(ms.ToArray(), Byte())
        Return System.Convert.ToBase64String(compressedData, 0, compressedData.Length)
    End Function

    Public Function DeCompress(ByVal compressedString As String) As String
        Dim uncompressedString As String = ""
        Dim totalLength As Integer = 0
        Dim bytInput As Byte() = System.Convert.FromBase64String(compressedString)
        Dim writeData As Byte() = New Byte(4095) {}
        Dim s2 As Stream = New DeflateStream(New MemoryStream(bytInput), CompressionMode.Decompress)

        Dim size As Integer = s2.Read(writeData, 0, writeData.Length)
        If size > 0 Then
            totalLength += size
            uncompressedString += System.Text.Encoding.UTF8.GetString(writeData, 0, size)
        Else
            uncompressedString = ""
        End If

        s2.Close()
        Return uncompressedString
    End Function