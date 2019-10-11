'http://www.vcskicks.com/code-snippet/capture-screen.php

    Public Declare Auto Function GetDC Lib "user32.dll" (ByVal hWnd As IntPtr) As IntPtr

    <DllImport("user32.dll", ExactSpelling:=True)> _
    Public Shared Function ReleaseDC(ByVal hWnd As IntPtr, ByVal hDC As IntPtr) As IntPtr
    End Function

    <DllImport("gdi32.dll", ExactSpelling:=True)> _
    Public Shared Function BitBlt(ByVal hDestDC As IntPtr, ByVal x As Integer, ByVal y As Integer, ByVal nWidth As Integer, ByVal nHeight As Integer, ByVal hSrcDC As IntPtr, _
     ByVal xSrc As Integer, ByVal ySrc As Integer, ByVal dwRop As Integer) As IntPtr
    End Function

    <DllImport("user32.dll", EntryPoint:="GetDesktopWindow")> _
    Public Shared Function GetDesktopWindow() As IntPtr
    End Function

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
		 Take().Save("c:\1.png", System.Drawing.Imaging.ImageFormat.Png)
'        PictureBox1.Image = Take()

    End Sub

    Public Function Take() As Bitmap
        Dim screenWidth As Integer = Screen.PrimaryScreen.Bounds.Width
        Dim screenHeight As Integer = Screen.PrimaryScreen.Bounds.Height

        Dim screenBmp As New Bitmap(screenWidth, screenHeight)
        Dim g As Graphics = Graphics.FromImage(screenBmp)

        Dim dc1 As IntPtr = GetDC(GetDesktopWindow())
        Dim dc2 As IntPtr = g.GetHdc()

        'Main drawing, copies the screen to the bitmap
        'last number is the copy constant
        BitBlt(dc2, 0, 0, screenWidth, screenHeight, dc1, _
         0, 0, 13369376)

        'Clean up
        ReleaseDC(GetDesktopWindow(), dc1)
        g.ReleaseHdc(dc2)
        g.Dispose()

        Return screenBmp
    End Function