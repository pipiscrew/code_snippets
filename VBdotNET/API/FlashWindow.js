    <DllImport("user32.dll")> _
    Private Shared Function FlashWindow(ByVal hwnd As IntPtr, ByVal bInvert As Boolean) As Boolean
    End Function


    Private Sub Timer1_Tick(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Timer1.Tick
        FlashWindow(Me.Handle, True)
    End Sub

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        Timer1.Interval = 2000
        Timer1.Enabled = True
    End Sub