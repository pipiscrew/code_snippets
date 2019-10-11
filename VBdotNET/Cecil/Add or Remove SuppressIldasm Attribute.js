'remove
        Dim def As AssemblyDefinition = AssemblyFactory.GetAssembly(txtFile.Text)
        Dim si As Type = GetType(Runtime.CompilerServices.SuppressIldasmAttribute)
        Dim found As CustomAttribute = Nothing

        For Each attr As CustomAttribute In def.CustomAttributes
            If attr.Constructor.DeclaringType.FullName = si.FullName Then
                found = attr
                Exit For
            End If
        Next

        If found IsNot Nothing Then
            'Remove it
            def.CustomAttributes.Remove(found)
            AssemblyFactory.SaveAssembly(def, txtFile.Text)
        end if 
        
        
'add

        Dim def As AssemblyDefinition = AssemblyFactory.GetAssembly(txtFile.Text)
        Dim si As Type = GetType(Runtime.CompilerServices.SuppressIldasmAttribute)
        Dim found As CustomAttribute = Nothing

        For Each attr As CustomAttribute In def.CustomAttributes
            If attr.Constructor.DeclaringType.FullName = si.FullName Then
                found = attr
                Exit For
            End If
        Next

        'Only add if it's not there already
        If found Is Nothing Then
            'Add one
            Dim constructor As MethodReference = def.MainModule.Import(GetType(Runtime.CompilerServices.SuppressIldasmAttribute).GetConstructor(Type.EmptyTypes))
            Dim attr As New CustomAttribute(constructor)
            def.CustomAttributes.Add(attr)
            AssemblyFactory.SaveAssembly(def, txtFile.Text)
        End If