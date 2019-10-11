Private Sub Form_Load()
Me.Caption = apTitle & " -- [whknows@gmail.com]"

If Len(Command$) > 0 Then MsgBox "parameter!": End
End Sub