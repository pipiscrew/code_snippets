    Private Sub TextBox1_KeyPress(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyPressEventArgs) Handles TextBox1.KeyPress
        If e.KeyChar = Chr(13) Then
            lblEnter.Visible = False
            e.Handled = True
        endif
    End sub
    
    8elei sto keypress + e.Handled
    
    
    
    OR
    
    Private Sub textBox1_KeyDown(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles textBox1.KeyDown
        If e.KeyCode = Keys.Enter Then button1.PerformClick() : e.SuppressKeyPress = True
    End Sub