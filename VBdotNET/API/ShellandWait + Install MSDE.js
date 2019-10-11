    Private Sub ShellandWait(ByVal ProcessPath As String)
        Me.Visible = False
        Dim objProcess As System.Diagnostics.Process
        Try
            objProcess = New System.Diagnostics.Process()
            objProcess.StartInfo.FileName = ProcessPath
            objProcess.StartInfo.WindowStyle = ProcessWindowStyle.Normal
            objProcess.Start()

            'Wait until the process passes back an exit code 
            objProcess.WaitForExit()

            'Free resources associated with this process
            objProcess.Close()

            Me.Visible = True
        Catch ex As Exception
            MessageBox.Show("Could not start process " & ProcessPath, "Error")
            Me.Visible = True
        End Try
    End Sub

'me parameters
    Private Sub ShellandWait(ByVal ProcessPath As String, ByVal parameters$)

        Dim objProcess As System.Diagnostics.Process
        Try
            objProcess = New System.Diagnostics.Process()
            objProcess.StartInfo.FileName = ProcessPath
            objProcess.StartInfo.Arguments = parameters
            objProcess.StartInfo.WindowStyle = ProcessWindowStyle.Normal
            objProcess.Start()

            'Wait until the process passes back an exit code 
            objProcess.WaitForExit()

            'Free resources associated with this process
            objProcess.Close()


        Catch ex As Exception
            MessageBox.Show("Could not start process " & ProcessPath, "Error")
        End Try
    End Sub

'Installing MSDE
    Private Sub InstallMSDE()
        Try
            If System.IO.File.Exists(Application.StartupPath & "\setup.exe") Then
                ShellandWait(Application.StartupPath & "\setup.exe")
                User = "sa"
                Pass = "medical"
                Shell("net start mssqlserver", AppWinStyle.Hide, True)
                doRestore()
            End If
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub