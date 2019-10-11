    Private Sub Button9_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button9.Click
        Try
            My.Computer.Registry.SetValue("HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Directory\shell\sRenamer\command", "", Application.StartupPath & "\sRenamerNET.exe %1")

            MsgBox("Done!" & vbCrLf & vbCrLf & "Added successfully to 'explorer context menu'", MsgBoxStyle.Information, apTitle)
        Catch
            MsgBox("Someting wrong!", MsgBoxStyle.Exclamation, apTitle)
        End Try

    End Sub

    Private Sub Button10_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button10.Click
        Try
            My.Computer.Registry.LocalMachine.DeleteSubKeyTree("SOFTWARE\Classes\Directory\shell\sRenamer")

            MsgBox("Done!" & vbCrLf & vbCrLf & "Added removed from 'explorer context menu'", MsgBoxStyle.Information, apTitle)
        Catch
            MsgBox("Someting wrong!", MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub