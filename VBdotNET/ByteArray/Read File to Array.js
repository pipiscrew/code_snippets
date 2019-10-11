        Dim buffer As Byte()
        Dim stream2 As FileStream = File.OpenRead("C:\!testface\testdsts\WindowsApplication1.exe")
        buffer = New Byte(stream2.Length - 1) {}
        stream2.Read(buffer, 0, CInt(stream2.Length))
        stream2.Close()
        
'or for memorystream
        
Dim stream As Stream
Dim byteArrayContent As Byte() = DirectCast(stream, MemoryStream).ToArray()
