        Dim fs As New FileStream(Application.StartupPath & "\Reflector.exe", FileMode.Open)
        Dim br As New BinaryReader(fs)
        Dim bin As Byte() = br.ReadBytes(Convert.ToInt32(fs.Length))
        fs.Close()
        br.Close()
        ' load the bytes into Assembly
        Dim a As Assembly = Assembly.Load(bin)
        ' search for the Entry Point
        Dim method As MethodInfo = a.EntryPoint
        If method IsNot Nothing Then
            ' create an istance of the Startup form Main method
            Dim o As Object = a.CreateInstance(method.Name)
            ' invoke the application starting point
            method.Invoke(o, Nothing)
        End If