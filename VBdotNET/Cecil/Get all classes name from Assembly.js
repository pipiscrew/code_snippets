'Open the assembly using Mono.Cecil
Dim assemblyDefinition As AssemblyDefinition = AssemblyFactory.GetAssembly(args(0))

'Loop through each module
For Each moduleDefinition As ModuleDefinition In assemblyDefinition.Modules
    'Search through the types
    For Each typeDefinition As TypeDefinition In moduleDefinition.Types
        'Find the type definition for MyLogic
        If typeDefinition.Name = "MyLogic" Then
            'Notice that the property can be "set"
            typeDefinition.Name = "MyChangedLogic"
        End If
    Next
Next

'Save the assembly with a .changed extension
'First create the path to save this assembly
Dim newPath As String = [String].Format("{0}{3}{1}.changed{2}", Path.GetDirectoryName(args(0)), Path.GetFileNameWithoutExtension(args(0)), Path.GetExtension(args(0)), Path.DirectorySeparatorChar)
'Finally save the assembly
AssemblyFactory.SaveAssembly(assemblyDefinition, newPath)

'Output our result
Console.WriteLine("Outputted the new assembly to {0}", newPath)
