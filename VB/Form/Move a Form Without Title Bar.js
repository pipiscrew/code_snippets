Private Declare Sub ReleaseCapture Lib "user32" ()
Private Declare Function SendMessage Lib "user32" Alias "SendMessageA" (ByVal hWnd As Long, ByVal wMsg As Long, ByVal wparam As Integer, ByVal iparam As Long) As Long

Private Sub formdrag(theform As Form)
    ReleaseCapture
    Call SendMessage(theform.hWnd, &HA1, 2, 0&)
End Sub


Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
formdrag Me

End Sub