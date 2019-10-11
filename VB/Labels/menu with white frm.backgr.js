Private Sub Label1_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
Label1.Appearance = 1
Label1.BackColor = &HFFC0C0
End Sub

Private Sub Label2_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
Label2.Appearance = 1
Label2.BackColor = &HFFC0C0
End Sub

Private Sub Form_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
If Label1.Appearance = 1 Or Label2.Appearance = 1 Then
    Label1.Appearance = 0
    Label2.Appearance = 0
    Label1.ForeColor = &HC00000
    Label2.ForeColor = &HC0&
    Label1.BackColor = &HFFFFFF
    Label2.BackColor = &HFFFFFF
End If
End Sub