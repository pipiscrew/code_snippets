Private Sub dataGridView1_EditingControlShowing(ByVal sender As Object, _
ByVal e As DataGridViewEditingControlShowingEventArgs) _
Handles DataGridView1.EditingControlShowing

Dim txtEdit As TextBox = e.Control
'Remove any existing handler
RemoveHandler txtEdit.KeyPress, AddressOf txtEdit_Keypress
AddHandler txtEdit.KeyPress, AddressOf txtEdit_Keypress

End Sub

Private Sub txtEdit_Keypress(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyPressEventArgs)
Console.WriteLine("KeyPress " & e.KeyChar.ToString())
'Test for numeric value or backspace in first column
If DataGridView1.CurrentCell.ColumnIndex = 0 Then
If IsNumeric(e.KeyChar.ToString()) _
Or e.KeyChar = ChrW(Keys.Back) _
Or e.KeyChar = "." Then
Console.WriteLine("KeyPress number")
e.Handled = False 'if numeric display 
Else
Console.WriteLine("Enter Numbers Only")
e.Handled = True 'if non numeric don't display
End If
End If
End Sub
