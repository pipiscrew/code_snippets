    Private Sub Button5_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button5.Click
        'AppDomain.CurrentDomain.ExecuteAssembly("C:\a6\c1grid\bin\Release\WindowsApplication1.exe")
        DomainLaunchAssembly("C:\a6\c1grid\bin\Release\WindowsApplication1.exe")
    End Sub

    Private Shared Sub DomainLaunchAssembly(ByVal assemblyPath As String)
        Dim domainSetup As New AppDomainSetup()
        domainSetup.ApplicationBase = Path.GetDirectoryName(assemblyPath)
        domainSetup.ApplicationName = "LaunchedApplication"

        Dim subDomain As AppDomain = AppDomain.CreateDomain("MySubdomain", AppDomain.CurrentDomain.Evidence, domainSetup)

        Try
            subDomain.ExecuteAssembly(assemblyPath)

            'For Each asm As Assembly In subDomain.GetAssemblies
            '    MsgBox(asm.ToString)
            'Next

        Finally
            AppDomain.Unload(subDomain)
        End Try
    End Sub