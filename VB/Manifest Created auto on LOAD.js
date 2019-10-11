Public Sub CreateMANIFEST()
    On Error Resume Next
    
    If Dir(App.Path & "\" & App.EXEName & ".exe.MANIFEST") = vbNullString Then
    
    Open App.Path & "\" & App.EXEName & ".exe.MANIFEST" For Output As #1
    
    Print #1, "<?xml version=""1.0"" encoding=""UTF-8"" standalone=""yes""?>"
    Print #1, "<assembly xmlns=""urn:schemas-microsoft-com:asm.v1"" manifestVersion=""1.0"">"
    Print #1, "<assemblyIdentity version=""1.0.0.0"" processorArchitecture=""x86"" name=""checkAFM"" type=""Win32"" />"
    Print #1, "<dependency>"
    Print #1, "<dependentAssembly>"
    Print #1, "<assemblyIdentity type=""Win32"" name=""Microsoft.Windows.Common-Controls"" version=""6.0.0.0"" processorArchitecture=""x86"" publicKeyToken=""6595b64144ccf1df"" language=""*"" />"
    Print #1, "</dependentAssembly>"
    Print #1, "</dependency>"
    Print #1, "</assembly>"
    
    Close #1
    End If
End Sub