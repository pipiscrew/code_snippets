        Dim assembly As AssemblyDefinition = AssemblyFactory.GetAssembly("C:\WindowsApplication2.exe")

        For Each [module] As ModuleDefinition In assembly.Modules
            For Each RESS As Mono.Cecil.EmbeddedResource In [module].Resources
                If RESS.Name = "WindowsApplication1.music.xm" Then

                    RESS.Data = New Byte() {0, 0, 0, 0}
                End If
            Next
        Next

        AssemblyFactory.SaveAssembly(assembly, "c:\kk.exe")