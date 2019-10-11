Private Declare Function SetCursorPos Lib "user32" (ByVal X As Long, ByVal Y As Long) As Long
Private Declare Function GetWindowRect Lib "user32" (ByVal hWnd As Long, lpRect As RECT) As Long

'to bazoyme se module
Type RECT
        Left As Long
        Top As Long
        Right As Long
        Bottom As Long
End Type
'to bazoyme se module

Private Sub Command1_Click()
    Dim MousePos As RECT
    
    Call GetWindowRect(Command2.hWnd, MousePos)
    Call SetCursorPos(MousePos.Left, MousePos.Top)
End Sub
