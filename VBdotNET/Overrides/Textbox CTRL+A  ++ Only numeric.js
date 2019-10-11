Public Class CTLnumericTextbox

    Inherits ComponentFactory.Krypton.Toolkit.KryptonTextBox

    'Select ALL
    Protected Overloads Overrides Sub OnKeyDown(ByVal e As System.Windows.Forms.KeyEventArgs)
        If e.Control AndAlso (e.KeyCode = System.Windows.Forms.Keys.A) Then
            Me.SelectAll()
            e.SuppressKeyPress = True
            e.Handled = True
        Else
            MyBase.OnKeyDown(e)
        End If
    End Sub

    'Only numeric  .  ,
    Protected Overrides Sub OnKeyPress(ByVal e As System.Windows.Forms.KeyPressEventArgs)
        If e.KeyChar = Chr(8) Or e.KeyChar = "." Or e.KeyChar = "," Then Exit Sub
        If Not Char.IsDigit(e.KeyChar) Then e.Handled = True
    End Sub

End Class


kai sto insert/update statement :
'" & IIf(txtPRICE.Text.Length = 0, 0, Replace(txtPRICE.Text, ",", ".")) & "'