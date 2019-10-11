Private Function showFolderDialog(showNewFolderButton As Boolean, Optional bPointFolder% = 0) As String
Dim objShell As Variant
Dim objFolder As Variant

Set objShell = CreateObject("Shell.Application")

Set objFolder = objShell.BrowseForFolder(Me.hWnd, "Choose Destination Folder...", IIf(showNewFolderButton = True, &H10 Or &H40, 0), CInt(bPointFolder))

If (Not objFolder Is Nothing) Then
    If objFolder = "Desktop" Then showFolderDialog = "": GoTo GoJMP
    If Dir(objFolder.Items.Item.path, vbDirectory) = vbNullString Then showFolderDialog = "": GoTo GoJMP
Else
    showFolderDialog = "": GoTo GoJMP
End If

showFolderDialog = objFolder.Items.Item.path

GoJMP:
Set objShell = Nothing
Set objFolder = Nothing
End Function