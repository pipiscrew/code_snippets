        Dim assembly = AssemblyFactory.GetAssembly(txtFile.Text)
        

        assembly.MainModule.Name = "Takis"
        assembly.Modules(0).Name = "FlexGrid"

        Dim namespaceName$ = ""
        Dim methodName$ = ""
        For Each type As TypeDefinition In assembly.MainModule.Types
            namespaceName = type.Namespace
            namespaceName = Replace(namespaceName, "C1.", "")
            namespaceName = Replace(namespaceName, "C1", "")
            type.Namespace = namespaceName

            For Each def As MethodDefinition In type.Methods
                methodName = def.Name
                methodName = Replace(methodName, "C1.", "")
                methodName = Replace(methodName, "C1", "")
                def.Name = methodName
            Next

        Next

        Dim attr As CustomAttribute

        For i = assembly.CustomAttributes.Count - 1 To 0 Step -1
            attr = assembly.CustomAttributes(i)
            Debug.Print(attr.Constructor.DeclaringType.Name)
            If attr.Constructor.DeclaringType.Name = "PoweredByAttribute" Then
                assembly.CustomAttributes.Remove(attr)
            End If

            If attr.Constructor.DeclaringType.Name = "AssemblyCopyrightAttribute" Then
                assembly.CustomAttributes.Remove(attr)
            End If

            If attr.Constructor.DeclaringType.Name = "AssemblyProductAttribute" Then
                assembly.CustomAttributes.Remove(attr)
            End If

            If attr.Constructor.DeclaringType.Name = "AssemblyCompanyAttribute" Then
                assembly.CustomAttributes.Remove(attr)
            End If

            If attr.Constructor.DeclaringType.Name = "AssemblyDescriptionAttribute" Then
                assembly.CustomAttributes.Remove(attr)
            End If

            If attr.Constructor.DeclaringType.Name = "AssemblyTrademarkAttribute" Then
                assembly.CustomAttributes.Remove(attr)
            End If

            If attr.Constructor.DeclaringType.Name = "AssemblyTitleAttribute" Then
                assembly.CustomAttributes.Remove(attr)
            End If

            If attr.Constructor.DeclaringType.Name = "C1ProductInfoAttribute" Then
                assembly.CustomAttributes.Remove(attr)
            End If
        Next

        'Dim resName$ = ""
        'For Each attr As CustomAttribute In assembly.CustomAttributes
        '    'Debug.Print(resName)
        '    resName = (attr.Constructor.DeclaringType.Name)
        '    resName = Replace(resName, "C1.", "")
        '    resName = Replace(resName, "C1", "")
        '    attr.Constructor.DeclaringType.Name = resName
        '    'If attr.Constructor.DeclaringType.FullName = si.FullName Then
        '    '    found = attr
        '    '    Exit For
        '    'End If
        'Next

        For l = 0 To assembly.Modules.Item(0).Resources.Count - 1
            NewRESname = assembly.Modules.Item(0).Resources(l).Name
            NewRESname = Replace(NewRESname, "C1.", "")
            NewRESname = Replace(NewRESname, "C1", "")
            assembly.Modules.Item(0).Resources(l).Name = NewRESname
        Next

        Dim expPath$ = IO.Path.GetDirectoryName(txtFile.Text) & "\Obfuscated" & "\"
        Dim fil$ = "FlexGrid.dll"

        IO.Directory.CreateDirectory(expPath)

        AssemblyFactory.SaveAssembly(assembly, expPath & fil)

        MsgBox("done")