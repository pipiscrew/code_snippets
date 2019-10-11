    Private Sub txtComments_KeyDown(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles txtComments.KeyDown
        Dim ctrlName2 As String = DirectCast(sender, Control).Name

        MsgBox(ctrlName2)
    End Sub