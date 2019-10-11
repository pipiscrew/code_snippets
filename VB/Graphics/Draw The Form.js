Dim x1 As Long
Dim y1 As Long


Private Sub Form_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)


    If Button = vbLeftButton Then
        Line (X, Y)-(x1, y1), vbBlack
        End If
        x1 = X
        y1 = Y
End Sub
