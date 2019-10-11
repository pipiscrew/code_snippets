Imports System.IO
Imports System.IO.Compression

    'Compress
    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim PEArray() As Byte

        PEArray = FileToByteArray("G:\dow\FST.comic bakery remix.xm")
        PEArray = Compress(True, PEArray)

        ByteArrayToFile(PEArray, "C:\ExtractedResource\test.dll")
    End Sub

    'Decompress
    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        Dim PEArray() As Byte

        PEArray = FileToByteArray("C:\ExtractedResource\test.dll")
        PEArray = Decompress(True, PEArray)

        ByteArrayToFile(PEArray, "C:\ExtractedResource\test2.dll")
    End Sub

    Public Shared Function Decompress(ByVal useGZIP As Boolean, ByVal data As Byte()) As Byte()
        'create a MemoryStream for holding the incoming data
        Dim input As New MemoryStream()
        Dim zipStream As Stream = Nothing
        'write the incoming bytes to the MemoryStream
        input.Write(data, 0, data.Length)
        'set our position to the start of the Stream
        input.Position = 0
        'create an instance of the GZipStream to decompress
        'the incoming byte array (the compressed ViewState)
        If useGZIP Then
            zipStream = New GZipStream(input, CompressionMode.Decompress, True)
        Else
            zipStream = New DeflateStream(input, CompressionMode.Decompress, True)
        End If
        'create a new MemoryStream for holding
        'the output
        Dim output As New MemoryStream()
        'create a byte array
        Dim buff As Byte() = New Byte(63) {}
        Dim read As Integer = -1
        'read the decompressed ViewState into
        'our byte array, set that value to our
        'read variable (int data type)
        read = zipStream.Read(buff, 0, buff.Length)
        'make sure we have something to read
        While read > 0
            'write the decompressed bytes to our
            'out going MemoryStream
            output.Write(buff, 0, read)
            'get the rest of the buffer
            read = zipStream.Read(buff, 0, buff.Length)
        End While
        zipStream.Close()
        'return our out going MemoryStream
        'in an array
        Return output.ToArray()
    End Function


    Public Function Compress(ByVal useGZIP As Boolean, ByVal data() As Byte) As Byte()
        'create a new MemoryStream for holding and
        Dim output As New MemoryStream()
        Dim zipStream As Stream = Nothing
        'create a new GZipStream object for compressing
        If useGZIP Then
            zipStream = New GZipStream(output, CompressionMode.Compress, True)
        Else
            zipStream = New DeflateStream(output, CompressionMode.Compress, True)
        End If

        'write the compressed bytes to the underlying stream
        zipStream.Write(data, 0, data.Length)
        'close the object
        zipStream.Close()
        'convert the MemoryStream to an array and return
        'it to the calling method
        Return output.ToArray()
    End Function

    Public Function FileToByteArray(ByVal FileName As String) As Byte()
        Dim PEArray() As Byte = Nothing
        ReDim PEArray(FileLen(FileName) - 1)
        Dim Free As Integer = FreeFile()
        FileOpen(Free, FileName, OpenMode.Binary, OpenAccess.Read)
        FileGet(Free, PEArray)
        FileClose(Free)
        Return PEArray
    End Function

    Public Sub ByteArrayToFile(ByVal ByteArray() As Byte, ByVal FileName As String)
        Dim Free As Integer = FreeFile()
        FileOpen(Free, FileName, OpenMode.Binary, OpenAccess.Write)
        FilePut(Free, ByteArray)
        FileClose(Free)
    End Sub