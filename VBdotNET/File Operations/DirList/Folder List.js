        Dim di As New IO.DirectoryInfo(Application.StartupPath)
        ' Get a reference to each directory in that directory.
        Dim diArr As IO.DirectoryInfo() = di.GetDirectories()
        ' Display the names of the directories.
        Dim dri As IO.DirectoryInfo

        For Each dri In diArr
            If dri.ToString.StartsWith("_") Then
                ListBox1.Items.Add(dri.ToString.Substring(1))
            End If
        Next dri