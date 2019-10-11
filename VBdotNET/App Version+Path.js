    Public apTitle$ = "Real Estate" & "DSf"

    Public Sub getVersion()
        Dim an = Assembly.GetEntryAssembly().GetName()
        Dim major As Integer = an.Version.Major
        apTitle = apTitle & " " & major
        MsgBox(apTitle)
    End Sub



appPath = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().GetName().CodeBase)