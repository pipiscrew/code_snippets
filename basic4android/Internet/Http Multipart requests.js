//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/8411-android-http-multipart-requests.html#post47094


Sub Process_Globals
    Dim hc As HttpClient
End Sub

Sub Activity_Create(FirstTime As Boolean)
    If FirstTime Then
        hc.Initialize("hc")
    End If
    'Add files
    Dim files As List
    files.Initialize
    Dim FD As FileData
    fd.Initialize
    fd.Dir = File.DirRootExternal
    fd.FileName = "temp.apk"
    fd.KeyName = "upfile2"
    fd.ContentType = "application/octet-stream"
    files.Add(fd)
    'Add second file
    Dim fd As FileData
    fd.Initialize
    fd.Dir = File.DirAssets
    fd.FileName = "1.png"
    fd.KeyName = "upfile"
    fd.ContentType = "application/octet-stream"
    files.Add(fd)
    'Add name / values pairs (parameters)
    Dim NV As Map
    NV.Initialize
    NV.Put("note1", "abc")
    NV.Put("note2", "def")
    Dim req As HttpRequest
    req = MultipartPost.CreatePostRequest("http://www.example.com/1.php", NV, files)
    hc.Execute(req, 1)
End Sub
Sub hc_ResponseError (Response As HttpResponse, Reason As String, StatusCode As Int, TaskId As Int)
    Log("error: " & Response & " " & StatusCode)
    If response <> Null Then
        Log(Response.GetString("UTF8"))
        Response.Release
    End If
End Sub
Sub hc_ResponseSuccess (Response As HttpResponse, TaskId As Int)
    Msgbox(Response.GetString("UTF8"), "")
    Response.Release
End Sub