
    Private Sub ScanFolders()
        Try
            Cursor = System.Windows.Forms.Cursors.WaitCursor

            Dim dDir$
            Dim tmp$ = ""

            dDir = ComboBoxEdit1.Text.Substring(0, ComboBoxEdit1.Text.IndexOf(" "))

            Dim di As New IO.DirectoryInfo(dDir)
            Dim diar1 As IO.DirectoryInfo() = di.GetDirectories(TextEdit1.Text, IIf(CheckEdit1.Checked = True, IO.SearchOption.AllDirectories, IO.SearchOption.TopDirectoryOnly))
            Dim dra As IO.DirectoryInfo

            For Each dra In diar1
                tmp = tmp & dra.FullName.ToString & vbCrLf
            Next

            If tmp.Length > 2 Then tmp = Mid(tmp, 1, Len(tmp) - 2)

            MainForm.TextEdit2.Text = tmp
            Me.Close()
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        Finally
            Cursor = System.Windows.Forms.Cursors.Default
        End Try
    End Sub


'Favorites Folder
        Dim favDir$ = ""
        Dim tmp$ = ""

        favDir = System.Environment.GetFolderPath(6)

        Dim di As New IO.DirectoryInfo(favDir)
        Dim diar1 As IO.DirectoryInfo() = di.GetDirectories("*.*", IO.SearchOption.AllDirectories)
        Dim dra As IO.DirectoryInfo

        For Each dra In diar1
            tmp = tmp & dra.FullName.ToString & vbCrLf
        Next

        If tmp.Length > 2 Then tmp = Mid(tmp, 1, Len(tmp) - 2)