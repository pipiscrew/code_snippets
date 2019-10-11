Imports System.Net

Friend Class WebActionClass

    Private WithEvents DownloadClient As WebClient
    Private WithEvents DownloadClientDS As WebClient
    Public Event DownloadFileCompleted(ByVal Cancel As Boolean) 'DownloadFileAsync
    Public Event DownloadPageSourceCompleted(ByVal sourcehtml$) 'DownloadFileAsync
    Public Event DownloadClientDSCompleted(ByVal RETdataset As DataSet) 'DownloadFileAsync
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

    Public Sub GetPageDataset(ByVal url$)
        DownloadClientDS = New WebClient
        Dim encoding As New System.Text.UTF8Encoding
        DownloadClientDS.Encoding = encoding
        DownloadClientDS.DownloadStringAsync(New Uri(url))
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

    Private Sub DownloadClientDS_DownloadStringCompleted(ByVal sender As Object, ByVal e As System.Net.DownloadStringCompletedEventArgs) Handles DownloadClientDS.DownloadStringCompleted
        Try
            Dim xmlSR As System.IO.StringReader = New System.IO.StringReader(e.Result)

            Dim dsDummy As DataSet
            dsDummy = New DataSet()
            dsDummy.ReadXml(xmlSR)

            RaiseEvent DownloadClientDSCompleted(dsDummy)

            'dsDummy.Dispose()
        Catch
            RaiseEvent DownloadClientDSCompleted(Nothing)
        End Try
    End Sub
End Class



'*----example
    Private Sub RefreshALLMEGASHARE()
        lstv.ListViewItemSorter = Nothing
        lvwColumnSorter = New ListViewColumnSorter()
        lstv.ListViewItemSorter = lvwColumnSorter

        ToolstripEnable(False)

        'mgInfo.GetPageSource("http://www.megaupload.com/xml/filemanager.php?confirmcode=UETC.3G8ECRPRFS0HJAONKTQEP55RECB&language=undefined&uniq=1278584701968")
        mgInfo.GetPageDataset("http://www.megaupload.com/xml/filemanager.php?confirmcode=UETC.3G8ECRPRFS0HJAONKTQEP55RECB&language=undefined&uniq=1278584701968")
    End Sub

    Private Sub mgInfo_DownloadClientDSCompleted(ByVal RETdataset As System.Data.DataSet) Handles mgInfo.DownloadClientDSCompleted
        If RETdataset IsNot Nothing Then
            'Dim dsDummy As DataSet

            '>>Fill Folders
            categoriesCB.Items.Clear()
            categoriesCB.Items.Add(New Mylist("", "0", "0"))

            Dim column As DataRow
            For Each column In RETdataset.Tables("FOLDER").Rows
                MsgBox(column("folderid").ToString)
            Next
    End Sub