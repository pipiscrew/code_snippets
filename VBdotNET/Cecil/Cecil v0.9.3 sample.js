Imports Mono.Cecil

Public Class Form1

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Dim assemblyDefinition As Mono.Cecil.AssemblyDefinition = assemblyDefinition.ReadAssembly("G:\dow\3HECreator.exe")
        Dim kk As Mono.Cecil.ModuleDefinition = Nothing
        kk.Name = "takis"

        assemblyDefinition.Modules.Add(kk)
        '     MsgBox(assemblyDefinition.Modules.Count)
        'Loop through each module
        For Each moduleDefinition As Mono.Cecil.ModuleDefinition In assemblyDefinition.Modules
            'Search through the types
            For Each typeDefinition As TypeDefinition In moduleDefinition.Types
                'Find the type definition for MyLogic
                '   Debug.Print(typeDefinition.Name)
                'If typeDefinition.Name = "MyLogic" Then
                '    'Notice that the property can be "set"
                '    typeDefinition.Name = "MyChangedLogic"
                'End If
            Next
        Next

        assemblyDefinition.Write("c:\albertoTEST.exe")

        'Save the assembly with a .changed extension
        'First create the path to save this assembly
        '  Dim newPath As String = [String].Format("{0}{3}{1}.changed{2}", Path.GetDirectoryName(args(0)), Path.GetFileNameWithoutExtension(args(0)), Path.GetExtension(args(0)), Path.DirectorySeparatorChar)
        'Finally save the assembly
        'AssemblyFactory.SaveAssembly(assemblyDefinition, "c:\21.exe") '@v9.3 = AssemblyDefinition.Write
    End Sub
End Class
