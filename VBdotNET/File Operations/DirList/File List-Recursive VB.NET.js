        Dim favDir$ = ""
        Dim tmp$ = ""

        favDir = System.Environment.GetFolderPath(6)

        Dim di As New IO.DirectoryInfo(favDir)
        Dim diar1 As IO.FileInfo() = di.GetFiles("*.url", IO.SearchOption.AllDirectories)
        Dim dra As IO.FileInfo

        For Each dra In diar1
            tmp = tmp & dra.FullName.ToString & vbCrLf
        Next

        If tmp.Length > 2 Then tmp = Mid(tmp, 1, Len(tmp) - 2)


OR


        Dim di As New IO.DirectoryInfo(txtDir.Text)
        Dim diar1 As IO.FileInfo() = di.GetFiles("*." & IIf(txtTAB1fileEXT.Text.Trim.Length > 0, txtTAB1fileEXT.Text.Trim, "*"), IIf(cmdSubFolders.Checked, SearchOption.AllDirectories, SearchOption.TopDirectoryOnly))
        Dim dra As IO.FileInfo

        txtSource.Text = ""
        txtDest.Text = ""
        'list the names of all files in the specified directory
        For Each dra In diar1
            txtSource.Text += dra.FullName.ToString & vbCrLf
            txtDest.Text += dra.ToString & vbCrLf
        Next


OR

            Dim sfiles As String() = System.IO.Directory.GetFiles(txtDir.Text, "*.mp3", System.IO.SearchOption.AllDirectories)

            txtSource.Visible = False
            txtDest.Visible = False
            For i As Integer = 0 To sfiles.Length - 1
                txtSource.Text = txtSource.Text & sfiles(i) & vbCrLf
                txtDest.Text = txtDest.Text & sfiles(i) & vbCrLf
                Application.DoEvents()
                ' trim the import path root from the filenames 
                'outList.Add(New PathPair(sfiles(i).Substring(importPathLength).TrimStart("\"c), sfiles(i)))
            Next