Option Explicit

Public Type RECT
   Left As Long
   Top As Long
   Right As Long
   Bottom As Long
End Type
Public Type POINTAPI
    X   As Long
    Y   As Long
End Type

Public Enum eExpandBy
    Percent50 = 0
    Percent75 = 1
    DoubleWidth = 2
    TripleWidth = 3
    QuadWidth = 4
    NoExpand = 5
End Enum
Public Enum eExpandType
    WidthOnly = 0
    HeightOnly = 1
    HeightAndWidth = 2
End Enum

Public Declare Function ScreenToClient Lib "user32" (ByVal hwnd As Long, lpPoint As POINTAPI) As Long
Public Declare Function SendMessageByNum& Lib "user32" Alias "SendMessageA" (ByVal hwnd As Long, ByVal wMsg As Long, ByVal wParam As Long, ByVal lParam As Long)
Public Declare Function MoveWindow Lib "user32" (ByVal hwnd As Long, ByVal X As Long, ByVal Y As Long, ByVal nWidth As Long, ByVal nHeight As Long, ByVal bRepaint As Long) As Long
Public Declare Function GetWindowRect Lib "user32" (ByVal hwnd As Long, lpRect As RECT) As Long

Public Const CB_SETDROPPEDCONTROLRECT = &H160
Public Const CB_GETITEMHEIGHT = &H154

Public Sub ExpandCombo(ByRef Combo As ComboBox, ByVal ExpandType As eExpandType, ByVal ExpandBy As eExpandBy, Optional ByVal hFrame As Long)

    Dim lRet As Long
    Dim pt As POINTAPI
    Dim rc As RECT
    Dim lComboWidth As Long
    Dim lNewHeight As Long
    Dim lItemHeight As Long
    
    If ExpandType <> HeightOnly Then
        lComboWidth = (Combo.Width / Screen.TwipsPerPixelX)
        Select Case ExpandBy
            Case 0
                lComboWidth = lComboWidth + (lComboWidth * 0.5)
            Case 1
                lComboWidth = lComboWidth + (lComboWidth * 0.75)
            Case 2
                lComboWidth = lComboWidth * 2
            Case 3
                lComboWidth = lComboWidth * 3
            Case 4
                lComboWidth = lComboWidth * 4
        End Select
        lRet = SendMessageByNum(Combo.hwnd, CB_SETDROPPEDCONTROLRECT, lComboWidth, 0)
        
    End If
    
    If ExpandType <> WidthOnly Then
        lComboWidth = Combo.Width / Screen.TwipsPerPixelX
        lItemHeight = SendMessageByNum(Combo.hwnd, CB_GETITEMHEIGHT, 0, 0)
        lNewHeight = lItemHeight * 30
        Call GetWindowRect(Combo.hwnd, rc)
        pt.X = rc.Left
        pt.Y = rc.Top
        Call ScreenToClient(hFrame, pt)
        Call MoveWindow(Combo.hwnd, pt.X, pt.Y, lComboWidth, lNewHeight, True)
    End If
    
End Sub

kai meta sto load

analoga me thn peristash

    Call ExpandCombo(Combo1(0), WidthOnly, TripleWidth, Frame1.hwnd)
    Call ExpandCombo(Combo1(1), HeightOnly, NoExpand, Frame1.hwnd)
    Call ExpandCombo(Combo1(2), HeightAndWidth, Percent50, Frame1.hwnd)