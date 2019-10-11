
	Dim asm As AssemblyDefinition = AssemblyFactory.GetAssembly(folder & origASS)
	
	'** license attribute remove**
	If licRemove Then
	    Dim definition2 As ModuleDefinition
	    Dim definition3 As TypeDefinition
	    For Each definition2 In asm.Modules
	
	        For Each definition3 In definition2.Types
	            RemoveLicenseProvider(definition3)
	        Next
	    Next
	End If
	'** license attribute remove**
	
	AssemblyFactory.SaveAssembly(asm, folder & origASS)
	
	

    Private Sub RemoveLicenseProvider(ByVal type As TypeDefinition)
        Dim i As Integer = 0
        Dim x As Integer = type.CustomAttributes.Count - 1

        If x = -1 Then Exit Sub
        Do

            If (type.CustomAttributes.Item(i).Constructor.DeclaringType.Name = "LicenseProviderAttribute") Then
                type.CustomAttributes.RemoveAt(i)
                i -= 1
            End If

            Dim definition As TypeDefinition
            For Each definition In type.NestedTypes
                Me.RemoveLicenseProvider(definition)
            Next

            i += 1
        Loop Until i >= x

    End Sub

 
