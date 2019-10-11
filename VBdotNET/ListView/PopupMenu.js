    Private Sub lstv_MouseUp(ByVal sender As Object, ByVal e As System.Windows.Forms.MouseEventArgs) Handles lstv.MouseUp
        Try
            If lstv.SelectedIndices.Count > 0 And e.Button = Windows.Forms.MouseButtons.Right Then
                LstvPopup.Show(lstv, New Point(e.X, e.Y))
            End If
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub