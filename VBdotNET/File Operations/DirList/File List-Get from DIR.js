        Dim di As New IO.DirectoryInfo(appDIR)
        Dim diar1 As IO.FileInfo() = di.GetFiles()
        Dim dra As IO.FileInfo

        'list the names of all files in the specified directory
        For Each dra In diar1
            If dra.Extension = ".con" Then ComboBox1.Items.Add(Replace(dra.ToString, ".con", ""))
        Next