Private Declare Function FindWindow Lib "user32" _
Alias "FindWindowA" (ByVal lpClassName As String, ByVal _
lpWindowName As String) As Long

Private Declare Function SendDlgItemMessage Lib "user32" _
Alias "SendDlgItemMessageA" (ByVal hDlg As Integer, ByVal _
nIDDlgItem As Long, ByVal Msg As Long, ByVal wParam As Long, _
ByVal lParam As Any) As Long

Private Declare Function SendMessage Lib "user32" _
Alias "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, _
ByVal wParam As Long, ByVal lParam As Long) As Long _

Private Declare Function FindWindowEx Lib "user32" _ Alias "FindWindowExA" (ByVal hWnd1 As Long, _
ByVal hWnd2 As Long, ByVal lpsz1 As String, ByVal lpsz2 As _
String) As Long

Const WM_SETTEXT = &HC
Const WM_SHOWWINDOW = &H18
Const WM_LBUTTONUP = &H202
Const WM_LBUTTONDOWN = &H201
Const BM_CLICK = &HF5

'sto button
Dim aFile As String
Dim iii As Long
Dim hwnd As Long
Dim lObjhWnd As Long

   hwnd = FindWindow(vbNullString, "Print To File")
   If hwnd <> 0 Then
  'Change according to what you need 
     aFile = "D:\REPORTSERVER\OUTPUT\" & _
         Format(Now(), "yymmddHhMmSs") & ".rpt"
      iii = SendDlgItemMessage(hwnd, 1152, WM_SETTEXT, 0, aFile)
      iii = SendMessage(hwnd, WM_SHOWWINDOW, 0, 0)
      lObjhWnd = FindWindowEx(hwnd, 0, "Button", "OK")
      iii = SendMessage(lObjhWnd, BM_CLICK, 0, 0)
      DoEvents
   End If
End Sub
