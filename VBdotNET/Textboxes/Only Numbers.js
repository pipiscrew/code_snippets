    Private Sub txtTitles30_KeyPress(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyPressEventArgs) Handles txtTitles30.KeyPress
        If e.KeyChar = Chr(8) Then Exit Sub
        If Not Char.IsDigit(e.KeyChar) Then e.Handled = True
    End Sub
    
    
Private Shared Function ContainsDigits(ByVal [text] As String) As Boolean
    Return ([text].IndexOfAny(New Char() { "0"c, "1"c, "2"c, "3"c, "4"c, "5"c, "6"c, "7"c, "8"c, "9"c }) <> -1)
End Function

 
