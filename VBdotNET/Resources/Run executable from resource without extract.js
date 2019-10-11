Private Shared Sub RunInternalExe(ByVal exeName As String)
    Dim executingAssembly As Assembly = Assembly.GetExecutingAssembly
    Dim manifestResourceStream As Stream = executingAssembly.GetManifestResourceStream((executingAssembly.GetName.Name & "." & exeName))
    If (Not manifestResourceStream Is Nothing) Then
        Dim buffer As Byte() = New Byte(manifestResourceStream.Length  - 1) {}
        manifestResourceStream.Read(buffer, 0, buffer.Length)
        manifestResourceStream.Close
        Assembly.Load(buffer).EntryPoint.Invoke(Nothing, Nothing)
    End If
End Sub

 
Private Shared Sub Main()
    RunInternalExe("TestApp.exe")
End Sub
