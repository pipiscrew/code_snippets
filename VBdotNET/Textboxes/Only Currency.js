    Private Sub txtTitles34_KeyPress(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyPressEventArgs) Handles txtTitles34.KeyPress, txtTitles35.KeyPress
        If e.KeyChar = Chr(8) Or e.KeyChar = "." Or e.KeyChar = "," Then Exit Sub
        If Not Char.IsDigit(e.KeyChar) Then e.Handled = True
    End Sub
    
    'optimize for SDF 
        If e.KeyChar = "." Then e.KeyChar = ","
        If e.KeyChar = Chr(8) Or e.KeyChar = "," Then Exit Sub
        If Not Char.IsDigit(e.KeyChar) Then e.Handled = True