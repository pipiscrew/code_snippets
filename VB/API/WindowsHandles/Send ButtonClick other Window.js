Private Declare Function FindWindowEx Lib "user32" _
   Alias "FindWindowExA" _
  (ByVal hWnd1 As Long, _
   ByVal hWnd2 As Long, _
   ByVal lpsz1 As String, _
   ByVal lpsz2 As String) As Long

Private Declare Function FindWindow Lib "user32" Alias "FindWindowA" (ByVal lpClassName As String, ByVal lpWindowName As String) As Long

Private Declare Function SendMessage Lib "user32" Alias _
    "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, _
    ByVal wParam As Long, lParam As Any) As Long
    
Const BM_CLICK = &HF5



Private Sub Command1_Click()
Dim WindowHandle&, ButtonHandle&, res&

WindowHandle = FindWindow(vbNullString, "Add new download")
ButtonHandle = FindWindowEx(WindowHandle, 0, "Button", "OK")
res = SendMessage(ButtonHandle, BM_CLICK, 0, 0)
End Sub
