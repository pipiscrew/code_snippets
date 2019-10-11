    Private Function ShowFolderDialog() As String
        Dim fd As New FolderBrowserDialog

        Dim result As DialogResult = fd.ShowDialog()
        If (result = DialogResult.OK) Then
            Return fd.SelectedPath
        Else
            Return Nothing
        End If
    End Function


function with preselected value

    Public Function ShowFolderDialog(ByVal descr$, ByVal preselectedFolderPath$) As String
        Dim fd As New FolderBrowserDialog

        fd.Description = descr
        fd.SelectedPath = preselectedFolderPath

        Dim result As DialogResult = fd.ShowDialog()
        If (result = DialogResult.OK) Then
            Return fd.SelectedPath
        Else
            Return Nothing
        End If
    End Function
