    Private Sub TabControl1_Selecting(ByVal sender As Object, ByVal e As System.Windows.Forms.TabControlCancelEventArgs) Handles TabControl1.Selecting
        If ToolStripADDNEW2.Text = "??????????" Then
            e.Cancel = True
            MsgBox("???????! ?????? ?? ???????????? ??? ?????!", MsgBoxStyle.Information, apTitle)
        End If
    End Sub