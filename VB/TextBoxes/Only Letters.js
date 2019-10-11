If KeyAscii <> 8 And KeyAscii <> 32 Then
    If (KeyAscii < 65 Or KeyAscii > 90) And (KeyAscii < 97 Or KeyAscii > 122) Then KeyAscii = 0
End If