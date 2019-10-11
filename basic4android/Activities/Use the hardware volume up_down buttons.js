//http://www.basic4ppc.com/forum/basic4android-updates-questions/17860-help-me-2.html
Sub Activity_KeyPress (KeyCode As Int) As Boolean
      If KeyCode=KeyCodes.KEYCODE_VOLUME_UP Then
            number.Text = "" & (number.Text + 1)
      End If
      Return True
End Sub