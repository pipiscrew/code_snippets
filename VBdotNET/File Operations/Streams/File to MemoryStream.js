    Public Function CreateMemoryStream(ByVal filePath As String) As MemoryStream
        'Step1: read whole FileStream into byte array.
        Dim buffer As Byte() = System.IO.File.ReadAllBytes(filePath)


        'Step2:convert byte array into MemoryStream.  
        Dim ms1 As New MemoryStream(buffer)
        Return ms1
    End Function