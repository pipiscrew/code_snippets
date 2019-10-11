        Dim data As Byte() = mem.ToArray()

        Dim filestream As New FileStream("c:\1.dat", FileMode.CreateNew)
        filestream.Write(data, 0, data.Length)
        filestream.Close()