        ''>>>>>>>>> u must set in Resource file, the property 'Build Action' to Embedded Resource' 
        Dim stream As IO.Stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("WindowsApplication1.PipisCrewProviders.dll")

        Dim buffer As Byte() = New Byte(stream.Length - 1) {}

        stream.Read(buffer, 0, buffer.Length)

        Dim stream3 As IO.FileStream = IO.File.Create("c:\temp.dll")
        stream3.Write(buffer, 0, buffer.Length)
        stream3.Close()

        MsgBox("c:\temp.dll exported!", MsgBoxStyle.Information)