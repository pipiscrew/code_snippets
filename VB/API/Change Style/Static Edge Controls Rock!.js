'in module
Public Declare Function SetWindowLong Lib "user32" Alias "SetWindowLongA" (ByVal hwnd As Long, ByVal nIndex As Long, ByVal dwNewLong As Long) As Long


Public Declare Function GetWindowLong Lib "user32" Alias "GetWindowLongA" (ByVal hwnd As Long, ByVal nIndex As Long) As Long


Public Declare Function SetWindowPos Lib "user32" (ByVal hwnd As Long, ByVal hWndInsertAfter As Long, ByVal X As Long, ByVal Y As Long, ByVal cx As Long, ByVal cy As Long, ByVal wFLAGS As Long) As Long
    Private Const SWP_NOZORDER = &H4
    Private Const SWP_NOSIZE = &H1
    Private Const SWP_NOMOVE = &H2
    Private Const SWP_DRAWFRAME = &H20
    Private Const SWP_FRAMECHANGED = &H20
    Private Const SWP_NOOWNERZORDER = &H200
    Private Const wFLAGS = _
    SWP_NOMOVE Or _
    SWP_NOSIZE Or _
    SWP_NOOWNERZORDER Or _
    SWP_NOZORDER Or _
    SWP_FRAMECHANGED


Public Enum enWindowStyles
    WS_BORDER = &H800000
    WS_CAPTION = &HC00000
    WS_CHILD = &H40000000
    WS_CLIPCHILDREN = &H2000000
    WS_CLIPSIBLINGS = &H4000000
    WS_DISABLED = &H8000000
    WS_DLGFRAME = &H400000
    WS_EX_ACCEPTFILES = &H10&
    WS_EX_DLGMODALFRAME = &H1&
    WS_EX_NOPARENTNOTIFY = &H4&
    WS_EX_TOPMOST = &H8&
    WS_EX_TRANSPARENT = &H20&
    WS_EX_TOOLWINDOW = &H80&
    WS_GROUP = &H20000
    WS_HSCROLL = &H100000
    WS_MAXIMIZE = &H1000000
    WS_MAXIMIZEBOX = &H10000
    WS_MINIMIZE = &H20000000
    WS_MINIMIZEBOX = &H20000
    WS_OVERLAPPED = &H0&
    WS_POPUP = &H80000000
    WS_SYSMENU = &H80000
    WS_TABSTOP = &H10000
    WS_THICKFRAME = &H40000
    WS_VISIBLE = &H10000000
    WS_VSCROLL = &H200000
    '\\ New from 95/NT4 onwards
    WS_EX_MDICHILD = &H40
    WS_EX_WINDOWEDGE = &H100
    WS_EX_CLIENTEDGE = &H200
    WS_EX_CONTEXTHELP = &H400
    WS_EX_RIGHT = &H1000
    WS_EX_LEFT = &H0
    WS_EX_RTLREADING = &H2000
    WS_EX_LTRREADING = &H0
    WS_EX_LEFTSCROLLBAR = &H4000
    WS_EX_RIGHTSCROLLBAR = &H0
    WS_EX_CONTROLPARENT = &H10000
    WS_EX_STATICEDGE = &H20000
    WS_EX_APPWINDOW = &H40000
    WS_EX_OVERLAPPEDWINDOW = (WS_EX_WINDOWEDGE Or WS_EX_CLIENTEDGE)
    WS_EX_PALETTEWINDOW = (WS_EX_WINDOWEDGE Or WS_EX_TOOLWINDOW Or WS_EX_TOPMOST)
End Enum

#Const USE_COMM_CTRLS_FLAT = True

Public Const GWL_EXSTYLE = (-20)
Public Const GWL_HINSTANCE = (-6)
Public Const GWL_HWNDPARENT = (-8)
Public Const GWL_ID = (-12)
Public Const GWL_STYLE = (-16)
Public Const GWL_USERDATA = (-21)
Public Const GWL_WNDPROC = (-4)
Public Const BS_3STATE = &H5&
Public Const BS_AUTO3STATE = &H6&
Public Const BS_AUTOCHECKBOX = &H3&
Public Const BS_AUTORADIOBUTTON = &H9&
Public Const BS_CHECKBOX = &H2&
Public Const BS_DEFPUSHBUTTON = &H1&
Public Const BS_DIBPATTERN = 5
Public Const BS_DIBPATTERN8X8 = 8
Public Const BS_DIBPATTERNPT = 6
Public Const BS_GROUPBOX = &H7&
Public Const BS_HATCHED = 2
Public Const BS_NULL = 1
Public Const BS_HOLLOW = BS_NULL
Public Const BS_INDEXED = 4
Public Const BS_LEFTTEXT = &H20&
Public Const BS_OWNERDRAW = &HB&
Public Const BS_PATTERN = 3
Public Const BS_PATTERN8X8 = 7
Public Const BS_PUSHBUTTON = &H0&
Public Const BS_RADIOBUTTON = &H4&
Public Const BS_SOLID = 0
Public Const BS_USERBUTTON = &H8&
Public Const ES_AUTOHSCROLL = &H80&
Public Const ES_AUTOVSCROLL = &H40&
Public Const ES_CENTER = &H1&
Public Const ES_LEFT = &H0&
Public Const ES_LOWERCASE = &H10&
Public Const ES_MULTILINE = &H4&
Public Const ES_NOHIDESEL = &H100&
Public Const ES_OEMCONVERT = &H400&
Public Const ES_PASSWORD = &H20&
Public Const ES_READONLY = &H800&
Public Const ES_RIGHT = &H2&
Public Const ES_UPPERCASE = &H8&
Public Const ES_WANTRETURN = &H1000&


Public Sub SetFlatControls(ByRef frmInput As Form)
    Dim i As Long


    For i = 0 To frmInput.Controls.Count - 1


        If TypeOf frmInput.Controls(i) Is TextBox Then
            SetFlatStyles frmInput.Controls(i).hwnd
        ElseIf TypeOf frmInput.Controls(i) Is CommandButton Then
            SetFlatStyles frmInput.Controls(i).hwnd
        ElseIf TypeOf frmInput.Controls(i) Is ListBox Then
            SetFlatStyles frmInput.Controls(i).hwnd
        ElseIf TypeOf frmInput.Controls(i) Is PictureBox Then
            SetFlatStyles frmInput.Controls(i).hwnd


   '         If USE_COMM_CTRLS_FLAT = True Then
                'Common Controls (comment out if not usi
                '     ng...)
            ElseIf TypeOf frmInput.Controls(i) Is ProgressBar Then
                SetFlatStyles frmInput.Controls(i).hwnd
            ElseIf TypeOf frmInput.Controls(i) Is TreeView Then
                SetFlatStyles frmInput.Controls(i).hwnd
            ElseIf TypeOf frmInput.Controls(i) Is ListView Then
                SetFlatStyles frmInput.Controls(i).hwnd
            'End If
        End If
    Next i
End Sub


Public Sub SetFlatStyles(lngHwnd As Long)
    Dim lngPreviousWindowsStyles As Long
    Dim lngPreviousExWindowsStyles As Long
    lngPreviousWindowsStyles = GetWindowLong(lngHwnd, GWL_STYLE)
    lngPreviousExWindowsStyles = GetWindowLong(lngHwnd, GWL_EXSTYLE)
    lngPreviousWindowsStyles = (lngPreviousWindowsStyles And Not WS_BORDER)
    lngPreviousExWindowsStyles = (lngPreviousExWindowsStyles Or WS_EX_STATICEDGE) And Not WS_EX_CLIENTEDGE
    Call SetWindowLong(lngHwnd, GWL_STYLE, lngPreviousWindowsStyles&)
    Call SetWindowLong(lngHwnd, GWL_EXSTYLE, lngPreviousExWindowsStyles&)
    SetWindowPos lngHwnd, 0, 0, 0, 0, 0, wFLAGS
End Sub
'in module

'form code
Private Sub Form_Load()
SetFlatControls Me
End Sub