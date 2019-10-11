If you do not want the main form to show on startup you can use the following strategy:

1) override the method SetVisibleCore of your main form:

Private mShow As Boolean = False

Protected Overrides Sub SetVisibleCore(ByVal value As Boolean)
  '--- Prevent form from being shown at startup
  If Not mShow Then value = False
  MyBase.SetVisibleCore(value)
End Sub

2) then if the form needs to be shown you call this method:

Private Sub ShowMe()
 mShow=true
 me.visible = true
End Sub

This method can for example be called in the click-event of a NotifyIcon