    Public Sub CopyDirectory(ByVal strSrc As String, ByVal strDest As String)
        Dim dirInfo As New System.IO.DirectoryInfo(strSrc)
        Dim fsInfo As System.IO.FileSystemInfo

        If Not System.IO.Directory.Exists(strDest) Then
            System.IO.Directory.CreateDirectory(strDest)
        End If

        For Each fsInfo In dirInfo.GetFileSystemInfos
            Dim strDestFileName As String = System.IO.Path.Combine(strDest, fsInfo.Name)

            If TypeOf fsInfo Is System.IO.FileInfo Then
                System.IO.File.Copy(fsInfo.FullName, strDestFileName, True)
                'This will overwrite files that already exist
            Else
                CopyDirectory(fsInfo.FullName, strDestFileName)
            End If
        Next

    End Sub