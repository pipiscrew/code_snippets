                Dim assembly As AssemblyDefinition = AssemblyFactory.GetAssembly(lstv.SelectedItems(0).Text)
                Dim tmpRES As Mono.Cecil.EmbeddedResource
                tmpRES = assembly.Modules.Item(0).Resources.Item(lstv3.SelectedItems(0).Index)
                tmpRES.Name = formTRANS

                AssemblyFactory.SaveAssembly(assembly, lstv.SelectedItems(0).Text)
