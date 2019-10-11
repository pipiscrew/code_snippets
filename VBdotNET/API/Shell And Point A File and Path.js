    Private Sub PointFile(ByVal filepath$)
        Dim objProcess As System.Diagnostics.Process
        Try
            objProcess = New System.Diagnostics.Process()
            objProcess.StartInfo.FileName = "explorer.exe"
            objProcess.StartInfo.Arguments = "/select, " & filepath
            objProcess.StartInfo.WindowStyle = ProcessWindowStyle.Normal
            objProcess.Start()

            objProcess.Close()
        Catch
        End Try
    End Sub