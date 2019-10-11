    Private Sub ShellandWait(ByVal ProcessPath As String, ByVal parameters$)

        Dim objProcess As System.Diagnostics.Process
        Try
            objProcess = New System.Diagnostics.Process()
            objProcess.StartInfo.FileName = ProcessPath
            objProcess.StartInfo.Arguments = parameters
            objProcess.StartInfo.WindowStyle = ProcessWindowStyle.Hidden
            objProcess.Start()

            'Wait until the process passes back an exit code 
            objProcess.WaitForExit()

            'Free resources associated with this process
            objProcess.Close()


        Catch ex As Exception
            '            MessageBox.Show("Could not start process " & ProcessPath, "Error")
        End Try
    End Sub