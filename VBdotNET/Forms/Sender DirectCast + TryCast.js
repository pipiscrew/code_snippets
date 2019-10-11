Private Sub ans1_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles ans1.Click, ans2.Click, ans3.Click, ans4.Click, ans5.Click
Dim lbl = DirectCast(sender, Label)

then u can :
If lbl.Tag.ToString.ToLower = "true" Then
end sub 




OR

Private Sub radioButtonHigh_CheckedChanged(ByVal sender As Object, ByVal e As EventArgs)

TryCast(sender, RadioButton)
Dim tag As String = CStr(button.Tag)
  If (tag = "Medium") Then
end if