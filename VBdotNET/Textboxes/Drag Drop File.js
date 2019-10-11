'to property ALLOWDROP = TRUE

    Private Sub txtFile_DragDrop(ByVal sender As Object, ByVal e As System.Windows.Forms.DragEventArgs) Handles txtFile.DragDrop
        Try
            'Retrieve the data in the array format.
            Dim FileName = e.Data.GetData(DataFormats.FileDrop)

            If FileName(0).EndsWith(".dll", StringComparison.CurrentCultureIgnoreCase) Or FileName(0).EndsWith(".exe", StringComparison.CurrentCultureIgnoreCase) Then
                txtFile.Text = FileName(0)
            End If

        Catch
            MsgBox("Error")
        End Try
    End Sub

    Private Sub txtFile_DragEnter(ByVal sender As Object, ByVal e As System.Windows.Forms.DragEventArgs) Handles txtFile.DragEnter
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