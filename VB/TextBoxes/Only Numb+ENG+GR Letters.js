    If KeyAscii <> 8 And KeyAscii <> 32 Then
        If (KeyAscii < 48 Or KeyAscii > 57) And (KeyAscii < 65 Or KeyAscii > 90) And (KeyAscii < 97 Or KeyAscii > 122) And (KeyAscii < 225 Or KeyAscii > 249) And (KeyAscii < 193 Or KeyAscii > 217) Then KeyAscii = 0
    End If