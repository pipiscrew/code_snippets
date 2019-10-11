    Private Delegate Sub kk_AbortedCallBack()
    Private Sub kk_Aborted() Handles kk.Aborted
        If Me.TextBox1.InvokeRequired Then
            Me.BeginInvoke(New kk_AbortedCallBack(AddressOf kk_Aborted))
        Else
            StatusWrite("aborted!")
        End If
    End Sub