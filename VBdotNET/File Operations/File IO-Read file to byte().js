                Dim stream As IO.FileStream = IO.File.OpenRead(sourcFL)
                Dim buffer = New Byte(stream.Length - 1) {}
                stream.Read(buffer, 0, buffer.Length)
                stream.Close()
                
                
                
OR

    Public Function FileToByteArray(ByVal FileName As String) As Byte()
        Dim PEArray() As Byte = Nothing
        ReDim PEArray(FileLen(FileName) - 1)
        Dim Free As Integer = FreeFile()
        FileOpen(Free, FileName, OpenMode.Binary, OpenAccess.Read)
        FileGet(Free, PEArray)
        FileClose(Free)
        Return PEArray
    End Function                