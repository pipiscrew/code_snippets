**Mono Numbers**
Private Sub Text6_KeyPress(KeyAscii As Integer)
        If KeyAscii <> 8 Then If KeyAscii < Asc("0") Or KeyAscii > Asc("9") Then KeyAscii = 0
End Sub


2nd way::
Private Sub Text1_KeyPress(KeyAscii As Integer)
   KeyAscii = NumericOnly(KeyAscii)
End Sub
 

and the routine looks like this:

Public Function NumericOnly(KeyAscii As Integer) As Integer
   If Not IsNumeric(Chr$(KeyAscii)) And Not KeyAscii = vbKeyBack Then
       NumericOnly = 0
   Else
       NumericOnly = KeyAscii
   End If
End Function


----------------------------------------------------optimized::
Private Sub Text1_KeyPress(KeyAscii As Integer)
   KeyAscii = NumericOnly(KeyAscii, "-,")
End Sub

Public Function NumericOnly(KeyAscii As Integer, Optional extrachar As Variant) As Integer
   Select Case Chr$(KeyAscii)
       Case "0" To "9", Chr$(vbKeyBack)
           NumericOnly = KeyAscii
       Case Else
           NumericOnly = 0
           If Not IsMissing(extrachar) Then
               If InStr(extrachar, Chr$(KeyAscii)) Then
                   NumericOnly = KeyAscii
               End If
           End If
   End Select
End Function
