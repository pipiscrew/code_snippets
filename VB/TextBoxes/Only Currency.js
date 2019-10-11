Private Sub Text3_KeyPress(KeyAscii As Integer)
Select Case KeyAscii
        Case 46
            If InStr(1, Text3, ".") > 0 Or InStr(1, Text3, ",") > 0 Or Len(Text3) = 0 Then
                Beep
                KeyAscii = 0
            ElseIf InStr(1, Text3, ",") = 0 Then
                KeyAscii = 44
            End If
        Case 44
            If InStr(1, Text3, ".") > 0 Or InStr(1, Text3, ",") > 0 Or Len(Text3) = 0 Then
                Beep
                KeyAscii = 0
            End If
        Case vbKeyDelete
        Case vbKeyBack
        Case 48 To 57
        Case Else
            Beep
            KeyAscii = 0
    End Select
End Sub


Se Function (gia ola ta textbox to idio)
Private Function OnlyCurr(txtCTRL As TextBox, CharCode%) As Integer
Select Case CharCode
        Case 44, 46
            If InStr(1, txtCTRL.Text, ".") > 0 Or InStr(1, txtCTRL.Text, ",") > 0 Or Len(txtCTRL.Text) = 0 Then
                Beep
                OnlyCurr = 0
            ElseIf InStr(1, txtCTRL.Text, ",") = 0 Then
                OnlyCurr = 44
            End If
        Case 8, 13, 48 To 57
            OnlyCurr = CharCode
        Case Else
            Beep
            OnlyCurr = 0
    End Select
End Function

kai meta se ola ta txtbox like ::
Private Sub Text4_KeyPress(KeyAscii As Integer)
KeyAscii = OnlyCurr(Text4, KeyAscii)
End Sub