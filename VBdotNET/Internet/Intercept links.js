    Private Declare Function DeleteUrlCacheEntry Lib "Wininet.dll" _
   Alias "DeleteUrlCacheEntryA" _
  (ByVal lpszUrlName As String) As Long


    Private Sub downloadPDF(URL As String)
        Cursor = System.Windows.Forms.Cursors.WaitCursor

        Try
            Dim k As String = Path.GetTempFileName() + ".pdf"

            My.Computer.Network.DownloadFile(URL, k)

            Process.Start(k)

        Catch
            ProgressBar1.Visible = False
            MsgBox("Λυπούμαστε το PDF δεν είναι διαθέσιμο αυτή τη στιγμή!", MsgBoxStyle.Exclamation)

        End Try

        Cursor = System.Windows.Forms.Cursors.Default
    End Sub

  
    Private Sub WebBrowser1_Navigating(sender As System.Object, e As System.Windows.Forms.WebBrowserNavigatingEventArgs) Handles WebBrowser1.Navigating

        Call DeleteUrlCacheEntry(e.Url.ToString)

        Debug.WriteLine(e.Url)


        If (e.Url.ToString.ToLower.EndsWith(".pdf")) Then
            e.Cancel = True

            ProgressBar1.Visible = True

            downloadPDF(e.Url.ToString)

            ProgressBar1.Visible = False
        End If



    End Sub