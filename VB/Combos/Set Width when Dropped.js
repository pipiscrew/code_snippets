Private Declare Function SendMessage Lib "user32" Alias "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, lParam As Long) As Long
Private Const CB_SETDROPPEDWIDTH = &H160

Private Sub Form_Load()
SendMessage cboState.hwnd, CB_SETDROPPEDWIDTH, 135, 0
'be sure to either carry the line down with a _, or put it all on one line. The complete line should start with SendMessage and end with 0
End Sub