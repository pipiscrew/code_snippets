Imports System.Net

Public Class WebActionClass

    Private WithEvents DownloadClient As WebClient
    Public Event DownloadFileCompleted(ByVal Cancel As Boolean) 'DownloadFileAsync
    Public Event DownloadPageSourceCompleted(ByVal sourcehtml$) 'DownloadFileAsync
    Public Event DownloadProgress(ByVal stat As System.Net.DownloadProgressChangedEventArgs)      'Generic


    Public Sub FileDownload(ByVal url$, ByVal destFile$)
        DownloadClient = New WebClient

        Try
            If IO.File.Exists(destFile) Then IO.File.Delete(destFile)
        Catch
        End Try

        DownloadClient.DownloadFileAsync(New Uri(url), (destFile))
    End Sub

    Public Sub GetPageSource(ByVal url$)
        DownloadClient = New WebClient
        Dim encoding As New System.Text.UTF8Encoding
        DownloadClient.Encoding = encoding
        DownloadClient.DownloadStringAsync(New Uri(url))
    End Sub

    Public Sub CancelDownload()
        '   If DownloadClient Is Nothing Then Exit Sub
        DownloadClient.CancelAsync()
    End Sub



    Private Sub DownloadClient_DownloadFileCompleted(ByVal sender As Object, ByVal e As System.ComponentModel.AsyncCompletedEventArgs) Handles DownloadClient.DownloadFileCompleted
        RaiseEvent DownloadFileCompleted(e.Cancelled)
    End Sub

    Private Sub DownloadClient_DownloadProgressChanged(ByVal sender As Object, ByVal e As System.Net.DownloadProgressChangedEventArgs) Handles DownloadClient.DownloadProgressChanged
        RaiseEvent DownloadProgress(e)
    End Sub

    Private Sub DownloadClient_DownloadStringCompleted(ByVal sender As Object, ByVal e As System.Net.DownloadStringCompletedEventArgs) Handles DownloadClient.DownloadStringCompleted
        Try
            RaiseEvent DownloadPageSourceCompleted(e.Result)
        Catch
            RaiseEvent DownloadPageSourceCompleted("")
        End Try
    End Sub
End Class


'-----------------------------------------------
declaration sthn forma:
    Dim WithEvents flvInfo As New WebActionClass
    Dim WithEvents flvDownloader As New WebActionClass

'-----------------------------
'gia na paroyme to hTML source
------------------------------
flvInfo.GetPageSource(KryptonTextBox1.Text)


    Private Sub flvDownloader_DownloadPageSourceCompleted(ByVal sourcehtml As String) Handles flvInfo.DownloadPageSourceCompleted
        If sourcehtml = "" Then
            panelDownload.Visible = False
            panelMain.Visible = True
            MsgBox("Video not exist on server!", MsgBoxStyle.Exclamation, apTitle) : Exit Sub
        End If


        txtTitle.Text = GetMovieName(sourcehtml)
        txtDescr.Text = GetMovieDescription(sourcehtml)

        flvDownloader.FileDownload("http://www.youtube.com/get_video?" & GetMovieUrl(sourcehtml), KryptonTextBox2.Text & "\" & MakeFileNameValid(txtTitle.Text) & ".flv")
    End Sub


'-----------------------------
'gia na kanoyme download file
------------------------------
otan teliwsei to downloa baraei @:

    Private Sub flvDownloader_DownloadFileCompleted(ByVal Cancel As Boolean) Handles flvDownloader.DownloadFileCompleted
        If Cancel Then
            panelDownload.Visible = False
            panelMain.Visible = True
            Exit Sub
        End If

        KryptonButton4.Visible = False
        txtStatus.Text = "converting"
        txtPercent.Text = "please wait.."

        ConverterMachine.DestinationFormat = KryptonComboBox1.Text
        ConverterMachine.WorkingDirectory = KryptonTextBox2.Text
        ConverterMachine.Filename = MakeFileNameValid(txtTitle.Text)

        ConverterMachine.DoStartConvert()
    End Sub


'---------------------------------------
'gia na kanoyme cancel to download file
----------------------------------------
    Private Sub KryptonButton4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonButton4.Click
        flvDownloader.CancelDownload()
        panelDownload.Visible = False
        panelMain.Visible = True
    End Sub