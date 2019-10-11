                Dim assembly As AssemblyDefinition = AssemblyFactory.GetAssembly(lstv.SelectedItems(0).Text)

                'new file
                'Dim stream As IO.FileStream = IO.File.OpenRead(sourcFL)
                'Dim buffer = New Byte(stream.Length - 1) {}
                'stream.Read(buffer, 0, buffer.Length)
                'stream.Close()


                Dim tmpRES As Mono.Cecil.EmbeddedResource
                tmpRES = assembly.Modules.Item(0).Resources.Item(lstv3.SelectedItems(0).Index)
                tmpRES.Data = buffer

                AssemblyFactory.SaveAssembly(assembly, lstv.SelectedItems(0).Text)