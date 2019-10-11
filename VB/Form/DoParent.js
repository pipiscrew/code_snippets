Option Explicit

Public Declare Function SetParent Lib "user32.dll" (ByVal hWndChild As Long, ByVal hWndNewParent As Long) As Long
Public Const GWL_EXSTYLE = -20
Public Const GWL_HINSTANCE = -6
Public Const GWL_HWNDPARENT = -8
Public Const GWL_ID = -12
Public Const GWL_STYLE = -16
Public Const GWL_USERDATA = -21
Public Const GWL_WNDPROC = -4
Public Const DWL_DLGPROC = 4
Public Const DWL_MSGRESULT = 0
Public Const DWL_USER = 8
Public Declare Function GetWindowLong Lib "user32" Alias "GetWindowLongA" (ByVal hwnd As Long, ByVal nIndex As Long) As Long
Public Declare Function SetWindowLong Lib "user32" Alias "SetWindowLongA" (ByVal hwnd As Long, ByVal nIndex As Long, ByVal dwNewLong As Long) As Long

Public Const WS_BORDER = &H800000
Public Const WS_CAPTION = &HC00000
Public Const WS_CHILD = &H40000000
Public Const WS_CHILDWINDOW = &H40000000
Public Const WS_CLIPCHILDREN = &H2000000
Public Const WS_CLIPSIBLINGS = &H4000000
Public Const WS_DISABLED = &H8000000
Public Const WS_DLGFRAME = &H400000
Public Const WS_GROUP = &H20000
Public Const WS_HSCROLL = &H100000
Public Const WS_ICONIC = &H20000000
Public Const WS_MAXIMIZE = &H1000000
Public Const WS_MAXIMIZEBOX = &H10000
Public Const WS_MINIMIZE = &H20000000
Public Const WS_MINIMIZEBOX = &H20000
Public Const WS_OVERLAPPED = &H0
Public Const WS_OVERLAPPEDWINDOW = &HCF0000
Public Const WS_POPUP = &H80000000
Public Const WS_POPUPWINDOW = &H80880000
Public Const WS_SIZEBOX = &H40000
Public Const WS_SYSMENU = &H80000
Public Const WS_TABSTOP = &H10000
Public Const WS_THICKFRAME = &H40000
Public Const WS_TILED = &H0
Public Const WS_TILEDWINDOW = &HCF0000
Public Const WS_VISIBLE = &H10000000
Public Const WS_VSCROLL = &H200000

Public Sub DoParent(frn As Form)
Dim lStyle   As Long

Load frn

With frn
    lStyle = GetWindowLong(.hwnd, GWL_STYLE)
    lStyle = lStyle Or WS_CHILD Or WS_POPUP
    Call SetWindowLong(.hwnd, GWL_STYLE, lStyle)
    Call SetParent(.hwnd, Form1.hwnd)
    Call SetWindowLong(.hwnd, GWL_HWNDPARENT, Form1.hwnd)
End With

frn.Show
frn.SetFocus
End Sub
