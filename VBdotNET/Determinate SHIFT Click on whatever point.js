Private Sub ToolStripKDT_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ToolStripKDT.Click

        Dim autoClick As Boolean = False
        If (Control.ModifierKeys And Keys.Shift) <> 0 Then
            autoClick = True
        End If
        
End Sub