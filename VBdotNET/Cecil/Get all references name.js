Dim assembly As AssemblyDefinition = AssemblyFactory.GetAssembly(filepath)

                For Each [module] As ModuleDefinition In assembly.Modules
                    For Each RESS As Mono.Cecil.EmbeddedResource In [module].Resources
                        lstv3.Items.Add(RESS.Name, 2)
                    Next
                Next
                
                
                
OR

            Dim assembly As AssemblyDefinition = AssemblyFactory.GetAssembly(filepath)
            Dim i%

	        For i = 0 To assembly.Modules.Item(0).AssemblyReferences.Count - 1
	            MsgBox(assembly.Modules.Item(0).AssemblyReferences(i).Name)
	        Next i