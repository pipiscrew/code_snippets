Private Declare Function MakeSureDirectoryPathExists Lib "imagehlp.dll" (ByVal lpPath As String) As Long

Call MakeSureDirectoryPathExists(NewFold)


-or-

Private Function CreatePath(NewPath) As Boolean
    Dim sPath As String
    'Add a trailing slash if none
    sPath = NewPath & IIf(Right$(NewPath, 1) = "\", "", "\")

    'Call API
    If MakeSureDirectoryPathExists(sPath) <> 0 Then
        'No errors, return True
        CreatePath = True
    End If

End Function