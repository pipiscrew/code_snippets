Private Sub Login_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
If System.Diagnostics.Debugger.IsAttached = False Then
Timer1.Interval = 100
Timer1.Enabled = True
Me.Opacity = 0
End If
End Sub

Private Sub Timer1_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Timer1.Tick
Me.Opacity += 0.05D
If Me.Opacity >= 100 Then Timer1.Enabled = False
End Sub
