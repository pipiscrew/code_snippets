                Dim assembly As AssemblyDefinition = AssemblyFactory.GetAssembly(buffer)  '"C:\Documents and Settings\Admin\Desktop\patcherNEW\Patcher.exe") 'System.Environment.GetFolderPath(32) & "tmp.exe") '"C:\Documents and Settings\Admin\Desktop\patcherNEW\Patcher.exe")


                For Each RESS As Mono.Cecil.EmbeddedResource In assembly.Modules.Item(0).Resources
                    If RESS.Name = "Patcher.logo.bmp" Then
                        'RESS.Data = PatchDdata 'New Byte() {0, 0, 0, 0}
                        assembly.Modules.Item(0).Resources.Remove(RESS)
                        Exit For

                    End If
                Next
                
                
                AssemblyFactory.SaveAssembly(assembly, filename)