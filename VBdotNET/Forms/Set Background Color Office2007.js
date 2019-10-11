Public Class Form1

    Sub New()

        ' This call is required by the Windows Form Designer.
        InitializeComponent()

        ' Makes sure the form repaints when it was resized
        Me.SetStyle(ControlStyles.ResizeRedraw, True)

        ' Add any initialization after the InitializeComponent() call.

    End Sub

    Protected Overrides Sub OnPaintBackground(ByVal pevent As PaintEventArgs)
        ' Getting the graphics object
        Dim g As Graphics = pevent.Graphics

        ' Creating the rectangle for the gradient
        Dim rBackground As New Rectangle(0, 0, Me.Width, Me.Height)

        Dim Color1 As Color = Color.FromArgb(191, 219, 255)
        Dim Color2 As Color = Color.FromArgb(164, 195, 234)
        ' Creating the lineargradient
        Dim bBackground As New System.Drawing.Drawing2D.LinearGradientBrush(rBackground, Color1, Color2, Drawing2D.LinearGradientMode.Vertical)

        ' Draw the gradient onto the form
        g.FillRectangle(bBackground, rBackground)

        ' Disposing of the resources held by the brush
        bBackground.Dispose()
    End Sub
    
End Class