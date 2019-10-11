Public Declare Function ShellExecute Lib "shell32.dll" Alias "ShellExecuteA" (ByVal hwnd As Long, ByVal lpOperation As String, ByVal lpFile As String, ByVal lpParameters As String, ByVal lpDirectory As String, ByVal nShowCmd As Long) As Long


ShellExecute Me.hWnd, "open", "explorer.exe", "/select, " & Form1.lstv.SelectedItem.SubItems(1) & Form1.lstv.SelectedItem.Text, vbNullString, vbNormalFocus