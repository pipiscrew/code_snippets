    Public Sub ByteArrayToFile(ByVal ByteArray() As Byte, ByVal FileName As String)
        Dim Free As Integer = FreeFile()
        FileOpen(Free, FileName, OpenMode.Binary, OpenAccess.Write)
        FilePut(Free, ByteArray)
        FileClose(Free)
    End Sub