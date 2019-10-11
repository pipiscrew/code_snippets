'-------------------------------
'sto event toy  webaction class 
'-------------------------------

    Private Sub flvDownloader_DownloadProgress(ByVal stat As System.Net.DownloadProgressChangedEventArgs) Handles flvDownloader.DownloadProgress
        SetProgress(stat)
    End Sub


'to progress GIF animate einai ena picture box poy sthn arxh einai width=0
'to 275 sto parakatw kwdika toy antoistixoyme me to width poy exoym dwsei sto picturebox mas


#Region " Panel Download - Progress Bar "

    Private Delegate Sub SetProgressDelegate(ByVal percents As DownloadProgressChangedEventArgs)

    Private Function GetRemainingTime(ByVal e As DownloadProgressChangedEventArgs) As String
        If (e.ProgressPercentage = 0) Then
            Return ""
        End If
        Dim span1 As TimeSpan = DateTime.Now.Subtract(Me.startTime)
        Dim num1 As Long = (span1.Ticks / CLng(e.ProgressPercentage))
        Dim num2 As Long = (num1 * (100 - e.ProgressPercentage))
        Dim span2 As New TimeSpan(num2)
        Dim num3 As Integer = CInt(span2.TotalMinutes)
        Return (num3.ToString & ":" & Me.GetSeconds(CDbl(span2.Seconds)) & " minutes")
    End Function

    Private Function GetSeconds(ByVal seconds As Double) As String
        If (seconds > 9) Then
            Return seconds.ToString
        End If
        Return ("0" & seconds.ToString)
    End Function

    Private Sub SetProgress(ByVal e As DownloadProgressChangedEventArgs)
        If MyBase.InvokeRequired Then
            MyBase.BeginInvoke(New SetProgressDelegate(AddressOf Me.SetProgress), New Object() {e})
        Else
            If (e Is Nothing) Then
                Me.ProgressDN.Width = 1
            Else
                Me.ProgressDN.Width = ((275 * e.ProgressPercentage) / 100)

                'If txtSize.Text = "Calculating..." Then txtSize.Text = SetBytes(e.TotalBytesToReceive)
                txtSize.Text = SetBytes(e.BytesReceived) & " / " & SetBytes(e.TotalBytesToReceive)
                txtPercent.Text = (e.ProgressPercentage & "%")
                txtRemain.Text = Me.GetRemainingTime(e)
                KryptonButton4.Visible = True 'abort button
            End If
        End If
    End Sub

#End Region