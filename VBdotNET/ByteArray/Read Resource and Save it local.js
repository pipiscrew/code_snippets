        ''>>>>>>>>> u must set in Resource file, the property 'Build Action' to Embedded Resource' 
        ''when u add XM file 
        ''>>>>>>>>> u must set in Resource file, the property 'Build Action' to Embedded Resource' 

        Dim stream As IO.Stream
        Dim buffer As Byte()

        'u can bypass this, but the bassmod.dll must be near EXE or in sys32
        '>>>>>>CHECK IF BASSMOD.DLL EXIST @ InternetCache, IF NOT EXPORT IT!
        If IO.File.Exists(System.Environment.GetFolderPath(32) & "\bassmod.dll") = False Then
            stream = Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream("WindowsApplication1.BASSMOD.dll")

            buffer = New Byte(stream.Length - 1) {}

            stream.Read(buffer, 0, buffer.Length)
            stream.Close()

            Dim stream3 As IO.FileStream = IO.File.Create(System.Environment.GetFolderPath(32) & "\bassmod.dll")
            stream3.Write(buffer, 0, buffer.Length)
            stream3.Close()
        End If
        '>>>>>>CHECK IF BASSMOD.DLL EXIST @ InternetCache, IF NOT EXPORT IT!