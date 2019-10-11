Public Function logtofile(recursionlevel As Integer, Path) As Boolean
Dim FS As Variant
Dim fil As Variant
Dim Fldr As Variant
Dim SubFldr As Variant

Set FS = CreateObject("Scripting.FileSystemObject")

Set Fldr = FS.GetFolder(Path)
    DoEvents
    
    For Each SubFldr In Fldr.SubFolders
        logtofile recursionlevel + 1, SubFldr
    Next

    For Each fil In Fldr.Files
'        Debug.Print fil.Name & "--" &
        
        a = GetUrlFromLink(Path & "\" & fil.Name)
        a = a
'        Set rss = GetRecordSet("Select * from BackupFiles where FName = '" & Replace(fil.Name, "'", "") & "' and Filesize ='" & fil.Size & "' and DateLastModified = '" & fil.DateLastModified & "' and directories ='" & Replace(Path, "'", "") & "'")
'
'        If rss.EOF Then
'            j = j + 1: DirectStruct.Text4 = j
'            rss.AddNew
'            rss!fname = Replace(fil.Name, "'", "")
'            rss!Filesize = fil.Size
'            rss!DateLastModified = fil.DateLastModified
'            rss!BackupVol = DirectStruct.Text3
'            rss!directories = Replace(Path, "'", "")
'            rss.Update
'
'            If DirectStruct.Check1.Value Mod 2 = 0 Then
'                Dim NewFold$, SourceFile$
'                SourceFile = Fldr.ParentFolder & "\" & Fldr.Name & "\" & fil.Name
'                NewFold = Mid(Fldr.ParentFolder & "\" & Fldr.Name, Len(DirectStruct.Text2) + 1)
'                NewFold = DirectStruct.Text1 & NewFold & "\"
'
'                Call MakeSureDirectoryPathExists(NewFold)
'                Dim bSuccess As Boolean
'                bSuccess = CopyFile(SourceFile, NewFold & fil.Name, False)
'            End If
'        End If
'        Set rss = Nothing
    Next

End Function