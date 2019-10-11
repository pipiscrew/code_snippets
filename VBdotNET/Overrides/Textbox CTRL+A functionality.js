'Add CTL+A functionality to textbox (missing also from windows.textbox
'after insert the class , build the PRJ , CTL appear in Toolbox menu

Public Class MyTextBox
    Inherits ComponentFactory.Krypton.Toolkit.KryptonTextBox

    Protected Overloads Overrides Sub OnKeyDown(ByVal e As System.Windows.Forms.KeyEventArgs)
        If e.Control AndAlso (e.KeyCode = System.Windows.Forms.Keys.A) Then
            Me.SelectAll()
            e.SuppressKeyPress = True
            e.Handled = True
        Else
            MyBase.OnKeyDown(e)
        End If
    End Sub
End Class