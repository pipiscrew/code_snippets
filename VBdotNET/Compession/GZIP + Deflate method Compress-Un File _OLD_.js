Imports System.IO.Compression


'--test
'otan den einai GZIP den mporei na to dei kaneis!
'idallws winRAR anoigei GZIP

    Private Sub Button5_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button5.Click
        Dim Buffer As Byte()
        Dim stream2 As FileStream = File.OpenRead("C:\!patching\RADvolution Designer 2009v3 DE evaluation\RADvolution-CECIL.dll")
        Buffer = New Byte(stream2.Length - 1) {}

        stream2.Read(Buffer, 0, CInt(stream2.Length))
        stream2.Close()

        Dim compessBuffer As Byte()
        compessBuffer = Compress(True, Buffer)

        compessBuffer = compessBuffer

        Dim stream3 As IO.FileStream = IO.File.Create("c:\bassmod.rar")
        stream3.Write(compessBuffer, 0, compessBuffer.Length)
        stream3.Close()
    End Sub

    Private Sub Button6_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button6.Click
        Dim Buffer As Byte()
        Dim stream2 As FileStream = File.OpenRead("C:\bassmod.rar")
        Buffer = New Byte(stream2.Length - 1) {}

        stream2.Read(Buffer, 0, CInt(stream2.Length))
        stream2.Close()

        Dim compessBuffer As Byte()
        compessBuffer = Decompress(True, Buffer)

        compessBuffer = compessBuffer

        Dim stream3 As IO.FileStream = IO.File.Create("c:\bassmoddddd.dll")
        stream3.Write(compessBuffer, 0, compessBuffer.Length)
        stream3.Close()
    End Sub
'--test



    Public Function Compress(ByVal useGZIP As Boolean, ByVal data() As Byte) As Byte()
        Try
            Dim sw As New Stopwatch
            '---the ms is used for storing the compressed data---
            Dim ms As New MemoryStream()
            Dim zipStream As Stream = Nothing

            '---start the stopwatch---
            sw.Start()
            If useGZIP Then
                zipStream = New GZipStream(ms, CompressionMode.Compress, True)
            Else
                zipStream = New DeflateStream(ms, CompressionMode.Compress, True)
            End If

            '---compressing using the info stored in data---
            zipStream.Write(data, 0, data.Length)
            zipStream.Close()

            '---stop the stopwatch---
            sw.Stop()

            '---calculate the compression ratio---
            Dim ratio As Single = Math.Round((ms.Length / data.Length) * 100, 2)
            Dim msg As String = "Original size: " & data.Length & _
                                ", Compressed size: " & ms.Length & _
                                ", Compression ratio: " & ratio & "%" & _
                                ", Time spent: " & sw.ElapsedMilliseconds & "ms"
            MsgBox(msg)

            ms.Position = 0
            '---used to store the compressed data (byte array)---
            Dim c_data(ms.Length - 1) As Byte

            '---read the content of the memory stream into the byte array---
            ms.Read(c_data, 0, ms.Length)
            Return c_data
        Catch ex As Exception
            MsgBox(ex.ToString)
            Return Nothing
        End Try
    End Function

    Public Function Decompress(ByVal useGZIP As Boolean, ByVal data() As Byte) As Byte()
        Try
            Dim sw As New Stopwatch
            '---copy the data (compressed) into ms---
            Dim ms As New MemoryStream(data)
            Dim zipStream As Stream = Nothing

            '---start the stopwatch---
            sw.Start()
            '---decompressing using data stored in ms---
            If useGZIP Then
                zipStream = New GZipStream(ms, CompressionMode.Decompress)
            Else
                zipStream = New DeflateStream(ms, CompressionMode.Decompress, True)
            End If


            '---used to store the decompressed data---
            Dim dc_data() As Byte

            '---the decompressed data is stored in zipStream; 
            ' extract them out into a byte array---
            dc_data = RetrieveBytesFromStream(zipStream, data.Length)

            '---stop the stopwatch---
            sw.Stop()

            MsgBox("Decompression completed. Time spent: " & _
               sw.ElapsedMilliseconds & "ms" & _
               ", Original size: " & dc_data.Length)

            Return dc_data
        Catch ex As Exception
            MsgBox(ex.ToString)
            Return Nothing
        End Try
    End Function

    Public Function RetrieveBytesFromStream( _
   ByVal stream As Stream, ByVal bytesblock As Integer) As Byte()

        '---retrieve the bytes from a stream object---
        Dim data() As Byte
        Dim totalCount As Integer = 0
        Try
            While True
                '---progressively increase the size of the data byte array---
                ReDim Preserve data(totalCount + bytesblock)
                Dim bytesRead As Integer = stream.Read(data, totalCount, bytesblock)
                If bytesRead = 0 Then
                    Exit While
                End If
                totalCount += bytesRead
            End While
            '---make sure the byte array contains exactly the number 
            ' of bytes extracted---
            ReDim Preserve data(totalCount - 1)
            Return data
        Catch ex As Exception
            MsgBox(ex.ToString)
            Return Nothing
        End Try

    End Function