        Dim def As AssemblyDefinition = AssemblyFactory.GetAssembly(TextBox1.Text)
        Dim si As Type = GetType(SuppressIldasmAttribute)
        Dim found As CustomAttribute = Nothing


        'Dim img As Binary.CLIHeader

        'img = def.MainModule.Image.CLIHeader
        'img = img


        ''Dim img As Metadata.MetadataRoot

        ''img = def.MainModule.Image.MetadataRoot
        ''img = img

        ''For Each arg As Metadata.MetadataStream In img.Streams
        ''    ' TextBox2.Text &= arg.MetadataStreamHeader & vbCrLf
        ''Next


        Dim img As Metadata.MetadataRoot

        img = def.MainModule.Image.MetadataRoot
        img = img

        For Each arg As Metadata.MetadataStream In img.Streams
            Dim kk As Metadata.MetadataStream

            kk = arg

            kk = kk

            'kk.UserStrings
            'TextBox2.Text &= arg.MetadataStreamHeader & vbCrLf
        Next