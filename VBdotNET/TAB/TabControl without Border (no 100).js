    Private Sub TabControl1_DrawItem(ByVal sender As System.Object, ByVal e As System.Windows.Forms.DrawItemEventArgs) Handles TabControl1.DrawItem
        Dim g As Graphics = e.Graphics
        Dim pn As Pen = New Pen(Color.Crimson, 991) '10 can be increased if you see bit of boarders
        g.DrawRectangle(pn, TabPage1.Bounds)
    End Sub
    
    'or
    
    Private Sub TabPage1_Paint(ByVal sender As System.Object, ByVal e As System.Windows.Forms.PaintEventArgs) Handles TabPage1.Paint
        Me.TabControl1.Region = New Region(New RectangleF(Me.TabPage1.Left , Me.TabPage1.Top, Me.TabPage1.Width, Me.TabPage1.Height))
    End Sub