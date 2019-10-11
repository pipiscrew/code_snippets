Imports Mono.Cecil
Imports Mono.Cecil.Cil

Public Class Form1

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        'Load the assembly
        Dim assembly = AssemblyFactory.GetAssembly("C:\Documents and Settings\Admin\Desktop\TESTDRIVENET\TestDriveNET\TestDriveNET\bin\Release\TestDriveNET.exe")

        'Output the il for each method in the assembly
        For Each type As TypeDefinition In assembly.MainModule.Types
            'Go through each method
            For Each def As MethodDefinition In type.Methods

                'Check the body
                If def.HasBody Then
                    Debug.Print(type.Name & "." & def.Name)
                    'Get the CIL worker
                    'Dim worker As CilWorker = def.Body.CilWorker

                    ''Chuck the bad instructions in here to avoid modifying the collection
                    'Dim instructionsToFix As New List(Of Instruction)()

                    ''Go through each instruction
                    'For Each instr As Instruction In def.Body.Instructions
                    '    'TODO: Some how figure out if it is one to fix and add it to be fixed
                    'Next

                    ''Go through the ones to fix and replace
                    'For Each instr As Instruction In instructionsToFix
                    '    Dim newInstr As Instruction = worker.Create(OpCodes.Nop)
                    '    worker.Replace(instr, newInstr)
                    'Next
                End If
            Next
        Next

        'Save the assembly
        AssemblyFactory.SaveAssembly(assembly, "c:\SimpleLibrary.new.dll")
        
    End Sub
End Class