''Gia to Curve ths formas
Private Declare Function SetWindowRgn Lib "user32" (ByVal hWnd As Long, ByVal hRgn As Long, ByVal bRedraw As Long) As Long
Private Declare Function CreateRoundRectRgn Lib "gdi32.dll" (ByVal X1 As Long, ByVal Y1 As Long, ByVal X2 As Long, ByVal Y2 As Long, ByVal X3 As Long, ByVal Y3 As Long) As Long
Private Declare Function DeleteObject Lib "gdi32" (ByVal hObject As Long) As Long
'Gia to Curve ths formas

Private Sub SmoothForm(Frm As Form, Optional ByVal Curvature As Double = 25)
Dim hRgn As Long
Dim X1 As Long, Y1 As Long
    X1 = Frm.Width / Screen.TwipsPerPixelX
    Y1 = Frm.Height / Screen.TwipsPerPixelY
    hRgn = CreateRoundRectRgn(0, 0, X1, Y1, Curvature, Curvature)
    SetWindowRgn Frm.hWnd, hRgn, True
    DeleteObject hRgn
End Sub
