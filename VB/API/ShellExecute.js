Public Declare Function ShellExecute Lib "shell32.dll" Alias "ShellExecuteA" (ByVal hwnd As Long, ByVal lpOperation As String, ByVal lpFile As String, ByVal lpParameters As String, ByVal lpDirectory As String, ByVal nShowCmd As Long) As Long



'usage
ShellExecute Me.hwnd, "Explore", Mid(comDlg.filename, 1, InStrRev(comDlg.filename, "\")), vbNullString, vbNullString, 1