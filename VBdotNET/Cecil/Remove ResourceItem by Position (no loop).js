        Dim assembly As AssemblyDefinition = AssemblyFactory.GetAssembly(lstv.SelectedItems(0).Text)

        'to no toy resource
        assembly.Modules.Item(0).Resources.RemoveAt(lstv3.SelectedItems(0).Index) 
        AssemblyFactory.SaveAssembly(assembly, "g:\dow\ex.exe")