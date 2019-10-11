    ' Recursively all files and subdirectories from the source destination
    Private Sub RecursiveCopyFiles(ByVal sourceDir$, ByVal fRecursive As Boolean)
        Dim i As Integer
        Dim aDirs() As String
        Dim aFiles() As String

        ' Add trailing separators to the supplied paths if they don't exist.
        If Not sourceDir.EndsWith(System.IO.Path.DirectorySeparatorChar.ToString()) Then
            sourceDir &= System.IO.Path.DirectorySeparatorChar
        End If

        ' Recursive switch to continue drilling down into dir structure.
        If fRecursive Then

            ' Get a list of directories from the current parent.
            aDirs = System.IO.Directory.GetDirectories(sourceDir)

            For i = 0 To aDirs.GetUpperBound(0)
                TextBox1.Text = TextBox1.Text & "*" & aDirs(i) & vbCrLf 'Prints Folder name
                RecursiveCopyFiles(aDirs(i), fRecursive)
            Next

        End If

        ' Get the files from the current parent.
        aFiles = System.IO.Directory.GetFiles(sourceDir)

        ' Copy all files.
        For i = 0 To aFiles.GetUpperBound(0)
            TextBox1.Text = TextBox1.Text & aFiles(i) & vbCrLf
        Next i
    End Sub