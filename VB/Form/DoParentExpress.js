Option Explicit

Private Declare Function SetParent Lib "user32.dll" (ByVal hWndChild As Long, ByVal hWndNewParent As Long) As Long

Private Declare Function FindWindow Lib "user32" Alias "FindWindowA" (ByVal lpClassName As String, ByVal lpWindowName As String) As Long

Private Declare Function MoveWindow Lib "user32" (ByVal hwnd As Long, ByVal x As Long, ByVal y As Long, ByVal nWidth As Long, ByVal nHeight As Long, ByVal bRepaint As Long) As Long

Private Sub Command1_Click()

MsgBox "Mooooooooving"

Dim oldhwnd As Long  ' receives handle of button's former parent
oldhwnd = SetParent(Command1.hwnd, Form2.hwnd)  ' button is now in window Form2.


End Sub


Private Sub Command2_Click()
Dim WinhWnd As Long
Dim oldhwnd As Long  ' receives handle of button's former parent

Shell "calc.exe"
'WinhWnd = FindWindow(vbNullString, "Motorola SM56 PCI Modem")
WinhWnd = FindWindow(vbNullString, "Calculator")
oldhwnd = SetParent(WinhWnd, Form2.hwnd)
MoveWindow WinhWnd, 0, -20, 400, 300, 1
Unload Me
End Sub


Private Sub Form_Load()
Form2.Show
End Sub


