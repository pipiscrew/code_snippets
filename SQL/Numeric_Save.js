ston SQL h parametros prepei na einai etsi:
          @Poso_3         [numeric](13,2)

sthn VB maxlength = 16


sto textbox poy syndeetai me to numeric field
Private Sub Text6_KeyPress(Index As Integer, KeyAscii As Integer)
 Select Case KeyAscii
        Case 46
            If InStr(1, Text2, ".") > 0 Or InStr(1, Text2, ",") > 0 Then
                Beep
                KeyAscii = 0
            ElseIf InStr(1, Text2, ",") = 0 Then
                KeyAscii = 44
            End If
        Case 44
            If InStr(1, Text2, ".") > 0 Or InStr(1, Text2, ",") > 0 Then
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

kai otan to "perneis" s_GET kai sto update s_UPD apo SQL:
text6.text = Replace(MSHFl.TextMatrix(PREVIOUSROWFL1, 6), ".", ",")kai otan to "perneis" s_GET kai sto update s_UPD apo SQL:
text6.text = Replace(MSHFl.TextMatrix(PREVIOUSROWFL1, 6), ".", ",")
