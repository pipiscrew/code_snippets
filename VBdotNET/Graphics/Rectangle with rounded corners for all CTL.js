    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        RoundCoin(10, ListView1)
    End Sub

    Public Sub RoundCoin(ByVal radius As Integer, ByVal ctrl As Object)
        Dim frmToRnd As Object = ctrl
        Dim regionRects(radius * 2 + 2) As System.Drawing.Rectangle
        Dim circle As New Bitmap(radius * 2, radius * 2)
        Dim g As System.Drawing.Graphics = System.Drawing.Graphics.FromImage(circle)
        g.Clear(Color.White)
        g.FillEllipse(Brushes.Black, 0, 0, circle.Width, circle.Height)
        Dim col As Integer = 0
        For row As Integer = 0 To radius - 1
            For col = 0 To radius - 1
                If circle.GetPixel(col, row) <> System.Drawing.Color.FromArgb(255, 255, 255, 255) Then Exit For
            Next
            regionRects(row * 2) = New System.Drawing.Rectangle(col, row, frmToRnd.Width - 2 * col, 1)
            regionRects(row * 2 + 1) = New System.Drawing.Rectangle(col, frmToRnd.Height - row - 1, frmToRnd.Width - 2 * col, 1)
        Next

        regionRects(radius * 2 + 2) = New System.Drawing.Rectangle(0, radius, frmToRnd.Width, frmToRnd.Height - circle.Height)
        Dim myPath As New Drawing2D.GraphicsPath
        myPath.AddRectangles(regionRects)
        frmToRnd.Region = New Region(myPath)

    End Sub