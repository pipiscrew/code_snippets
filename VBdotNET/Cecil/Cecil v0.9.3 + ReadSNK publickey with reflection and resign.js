'source
'http://bytes.com/topic/c-sharp/answers/250456-satellite-assemblies-strong-names
'http://www.mail-archive.com/mono-cecil@googlegroups.com/msg00067.html
        Dim assemblyDefinition As Mono.Cecil.AssemblyDefinition = assemblyDefinition.ReadAssembly(txtfile.Text)
        Dim fs As New FileStream("c:\veteran.snk", FileMode.Open, FileAccess.Read)
        Dim SNK As StrongNameKeyPair
        SNK = New StrongNameKeyPair(fs)

        Dim kk As AssemblyNameDefinition = assemblyDefinition.Name
        kk.HashAlgorithm = AssemblyHashAlgorithm.SHA1
        kk.PublicKey = SNK.PublicKey
        'kk.Name.Flags &= AssemblyFlags.PublicKey;
        'AssemblyFactory.SaveAssembly(ad, file);


        assemblyDefinition.Write(TextBox2.Text)

        MsgBox("done!")