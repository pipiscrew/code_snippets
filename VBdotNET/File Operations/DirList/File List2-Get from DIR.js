        If IO.Directory.Exists(Application.StartupPath & "\Reports") Then
            Dim di As New IO.DirectoryInfo(Application.StartupPath & "\Reports")
            Dim diar1 As IO.FileInfo() = di.GetFiles()
            Dim dra As IO.FileInfo

            ComboBox1.Items.Clear()
            ComboBox1.Items.Add("")

            'list the names of all files in the specified directory
            For Each dra In diar1
                If dra.Extension = ".xml" Then
                    ComboBox1.Items.Add(Replace(dra.ToString, ".xml", ""))
                End If
            Next

            ComboBox1.SelectedIndex = 0
        End If