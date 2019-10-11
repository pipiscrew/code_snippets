Private Function ShellAndWait(FileName As String) As Boolean
Dim objScript
On Error GoTo ERR_OpenForEdit
Set objScript = CreateObject("WScript.Shell")

ShellApp = objScript.Run(FileName, 1, True)
ShellAndWait = True

EXIT_OpenForEdit:
Exit Function
ERR_OpenForEdit:
MsgBox Err.Description
GoTo EXIT_OpenForEdit
End Function