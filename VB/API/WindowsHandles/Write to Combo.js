Private Const CB_ADDSTRING = &H143
Private Const CB_SETITEMDATA = &H151

Private Declare Function FindWindowEx Lib "user32" _
   Alias "FindWindowExA" _
  (ByVal hWnd1 As Long, _
   ByVal hWnd2 As Long, _
   ByVal lpsz1 As String, _
   ByVal lpsz2 As String) As Long

Private Declare Function SendMessage Lib "user32" _
   Alias "SendMessageA" _
  (ByVal hwnd As Long, _
   ByVal wMsg As Long, _
   ByVal wParam As Long, _
   lParam As Any) As Long

Private Declare Function SetWindowText Lib "user32" _
   Alias "SetWindowTextA" _
  (ByVal hwnd As Long, _
   ByVal lpString As String) As Long
   


Private Sub Command1_Click()

   Dim hwndEdit As Long
   
  'get the handle to the edit portion
  'of the combo control
   hwndEdit = FindWindowEx(Combo1.hwnd, 0&, vbNullString, vbNullString)
   
  'prove you got it by changing its text (style 0 only)
   Call SetWindowText(hwndEdit, "FindWindowEx found it!")
   
  'add it to the list...
   Call SendMessage(Combo1.hwnd, CB_ADDSTRING, _
                       0&, ByVal "FindWindowEx: Edit handle is " & CStr(hwndEdit))
   
End Sub


