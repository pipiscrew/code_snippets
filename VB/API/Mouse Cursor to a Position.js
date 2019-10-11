Private Declare Function SetCursorPos Lib "user32" (ByVal X As Long, ByVal Y As Long) As Long
Private Sub cmdMoveMouse_Click()
Dim Char As Integer

    If txtX.Text = "" Or txtY.Text = "" Then
        Exit Sub
    End If

    For i = 1 To Len(txtX.Text)
        Char = Asc(Mid(txtX.Text, i, 1))
        If Not (Char >= Asc("0") And Char <= Asc("9")) Then
            Exit Sub
        End If
    Next i

    For i = 1 To Len(txtY.Text)
        Char = Asc(Mid(txtY.Text, i, 1))
        If Not (Char >= Asc("0") And Char <= Asc("9")) Then
            Exit Sub
        End If
    Next i

    SetCursorPos CLng(txtX.Text), CLng(txtY.Text)

End Sub
