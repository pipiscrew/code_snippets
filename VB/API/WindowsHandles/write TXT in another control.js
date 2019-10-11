Private Declare Function FindWindow Lib "user32" Alias "FindWindowA" (ByVal lpClassName As String, ByVal lpWindowName As String) As Long
Private Declare Function FindWindowEx Lib "user32" _
   Alias "FindWindowExA" _
  (ByVal hWnd1 As Long, _
   ByVal hWnd2 As Long, _
   ByVal lpsz1 As String, _
   ByVal lpsz2 As String) As Long

Private Declare Function SendMessageString Lib "user32" Alias "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Integer, ByVal lParam As Any) As Long
Private Const WM_SETTEXT = &HC

WindowHandle = FindWindow(vbNullString, "Add new download")
ButtonHandle = FindWindowEx(WindowHandle, 0, "Button", "ok")
SendMessageString ButtonHandle, WM_SETTEXT, 0, "Hi people!"