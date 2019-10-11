//http://www.basic4ppc.com/forum/basic4android-updates-questions/14344-download-progress-feature-httputils-when-downloading-file.html#post81274

Sub Process_Globals
   Type ProgressStatus(Downloaded As Long,Total As Long)
   Dim url as string
End Sub

Sub Activity_Create(FirstTime As Boolean)
    initHttp
    url="http://www.yourserver.com/myfile.MP3"
    HttpUtils.Download("downloadFile",url)
End Sub

Sub initHttp
    HttpUtils.CallbackActivity = "Main"
    HttpUtils.CallbackJobDoneSub = "JobDone"
    HttpUtils.CallbackUrlDoneSub = "UrlDone"
    HttpUtils.CallbackProgressSub="ProgressHTTP"
End Sub

Sub ProgressHTTP(tmp As ProgressStatus)
    Label1.Text=tmp.Downloaded & "/" & tmp.Total
    ProgressBar1.progress=Round((tmp.downloaded*100)/tmp.total)
End Sub

Sub JobDone (Job As String)
    Select Job
        Case "downloadFile"
        If HttpUtils.IsSuccess(url) Then
            HttpUtils.SaveFile(url,"/sdcard/","myfile.mp3")
        End If
    End Select
    HttpUtils.Complete = False    
End Sub