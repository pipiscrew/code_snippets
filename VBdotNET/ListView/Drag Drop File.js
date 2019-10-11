to property ALLOWDROP = TRUE


#Region " LSTV DRAG and DROP "
    Private Sub lstv_DragEnter(ByVal sender As Object, ByVal e As System.Windows.Forms.DragEventArgs) Handles lstv.DragEnter
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
    Private Sub lstv_DragDrop(ByVal sender As Object, ByVal e As System.Windows.Forms.DragEventArgs) Handles lstv.DragDrop
        Try
            'Retrieve the data in the array format.
            Dim FileNames() As String = e.Data.GetData(DataFormats.FileDrop)
            Dim i As Integer
            For i = 0 To FileNames.Length - 1
                'Add the dragged items to the ListView control
                lstv.Items.Add(FileNames(i))
            Next i
        Catch
            MsgBox("Error")
        End Try
    End Sub
#End Region
