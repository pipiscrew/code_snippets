Dim objShell As Variant
Dim objFolder As Variant

Set objShell = CreateObject("Shell.Application")
' Shell.BrowseForFolder   (Hwnd, sTitle, iOptions [, vRootFolder])
Set objFolder = objShell.BrowseForFolder(Me.hwnd, "Choose Destination Folder...", 0)

If (Not objFolder Is Nothing) Then
    If objFolder = "Desktop" Then Text2 = "":   GoTo GoJMP
    If Dir(objFolder.Items.Item.Path, vbDirectory) = vbNullString Then Text2 = "":   GoTo GoJMP
Else
    Text2 = ""
    GoTo GoJMP
End If

Text2 = objFolder.Items.Item.Path

GoJMP:
Set objShell = Nothing
Set objFolder = Nothing


'------Na Bgaine Kai Create New Folder-------

Private Sub Command2_Click(Index As Integer)
Dim objShell As Variant
Dim objFolder As Variant

Set objShell = CreateObject("Shell.Application")

Set objFolder = objShell.BrowseForFolder(Me.hWnd, "Choose Folder...", &H10 Or &H40)

If (Not objFolder Is Nothing) Then
    If objFolder = "Desktop" Then Text2 = "":   GoTo GoJMP
    If Dir(objFolder.Items.Item.Path, vbDirectory) = vbNullString Then Text2 = "":   GoTo GoJMP
Else
    If Index = 0 Then Text2 = "" Else Text1 = ""
    GoTo GoJMP
End If

If Index = 0 Then Text2 = objFolder.Items.Item.Path Else Text1 = objFolder.Items.Item.Path

GoJMP:
Set objShell = Nothing
Set objFolder = Nothing
End Sub