    Private Sub Form1_Resize(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Resize
        panelPREREQ.Top = (TabPage13.Height - panelPREREQ.Height) / 2
        panelPREREQ.Left = (TabPage13.Width - panelPREREQ.Width) / 2
    End Sub