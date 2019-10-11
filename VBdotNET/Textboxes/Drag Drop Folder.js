
    Private Sub txtSource_DragDrop(ByVal sender As Object, ByVal e As System.Windows.Forms.DragEventArgs) Handles txtSource.DragDrop
        Try
            'Retrieve the data in the array format.
            Dim FileName = e.Data.GetData(DataFormats.FileDrop)

            If IO.Directory.Exists(FileName(0)) Then
                txtSource.Text = FileName(0)
            End If

        Catch
            MsgBox("Error")
        End Try
    End Sub

    Private Sub txtSource_DragEnter(ByVal sender As Object, ByVal e As System.Windows.Forms.DragEventArgs) Handles txtSource.DragEnter
        Try
            'Check for the DataFormat 'FileDrop'
            If e.Data.GetDataPresent(DataFormats.FileDrop) Then
                'set the Effect of drag-and-drop operation to Copy (adds a '+')
                e.Effect = DragDropEffects.Copy
            Else
                'Else set the Effect of drag-and-drop operation to None
                e.Effect = DragDropEffects.None
            End If
        Catch
            MsgBox("Error")
        End Try
    End Sub

    Private Sub txtSource_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles txtSource.TextChanged
        If txtSource.Text.Contains(":\") Then
            txtSource.ForeColor = Color.Black
            txtSource.TextAlign = HorizontalAlignment.Left
        End If
    End Sub