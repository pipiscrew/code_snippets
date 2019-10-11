'source
'http://www.koders.com/csharp/fid001B7C7C8FD9DCA9BFC4A2EC382283D093172F4F.aspx?s=file#L10
'http://stackoverflow.com/questions/566462/upload-files-with-httpwebrequest-multipart-form-data

    Private Sub Button4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button4.Click
        genereateHOST()

        Dim nvc As New NameValueCollection()
        nvc.Add("host", host)
        nvc.Add("u", "7DR9ZOVUPLBVQSXZ3X0N427CCHG5SLTE")

        Dim upFiles As String()

        ReDim upFiles(1)
        upFiles(0) = lstv.Items(0).Text
        upFiles(1) = lstv.Items(1).Text
        'upFiles(2) = lstv.Items(2).Text


        Debug.Print(UploadFilesToRemoteUrl(srv, "file_", upFiles, nvc))
        MsgBox("done!")
    End Sub
    
    Private Function UploadFilesToRemoteUrl(ByVal url As String, ByVal filesVariable As String, ByVal files As String(), ByVal nvc As NameValueCollection)

        Dim length As Long = 0
        Dim boundary As String = "----------------------------" & DateTime.Now.Ticks.ToString("x")


        Dim httpWebRequest2 As HttpWebRequest = DirectCast(WebRequest.Create(url), HttpWebRequest)
        httpWebRequest2.ContentType = "multipart/form-data; boundary=" & boundary
        httpWebRequest2.Method = "POST"
        httpWebRequest2.KeepAlive = True
        httpWebRequest2.Credentials = System.Net.CredentialCache.DefaultCredentials



        Dim memStream As Stream = New System.IO.MemoryStream()
        Dim boundarybytes As Byte() = System.Text.Encoding.ASCII.GetBytes(vbCr & vbLf & "--" & boundary & vbCr & vbLf)


        Dim formdataTemplate As String = vbCr & vbLf & "--" & boundary & vbCr & vbLf & "Content-Disposition: form-data; name=""{0}"";" & vbCr & vbLf & vbCr & vbLf & "{1}"

        For Each key As String In nvc.Keys
            Dim formitem As String = String.Format(formdataTemplate, key, nvc(key))
            Dim formitembytes As Byte() = System.Text.Encoding.UTF8.GetBytes(formitem)
            memStream.Write(formitembytes, 0, formitembytes.Length)
        Next


        memStream.Write(boundarybytes, 0, boundarybytes.Length)

        Dim headerTemplate As String = "Content-Disposition: form-data; name=""{0}""; filename=""{1}""" & vbCr & vbLf & "Content-Type: application/octet-stream" & vbCr & vbLf & vbCr & vbLf

        For i As Integer = 0 To files.Length - 1

            Dim header As String = String.Format(headerTemplate, filesVariable & i, IO.Path.GetFileName(files(i)))
            Dim headerbytes As Byte() = System.Text.Encoding.UTF8.GetBytes(header)
            memStream.Write(headerbytes, 0, headerbytes.Length)


            Dim fileStream As New FileStream(files(i), FileMode.Open, FileAccess.Read)
            Dim buffer As Byte() = New Byte(1023) {}

            Dim bytesRead As Integer = 0

            While (InlineAssignHelper(bytesRead, fileStream.Read(buffer, 0, buffer.Length))) <> 0
                memStream.Write(buffer, 0, bytesRead)
            End While


            memStream.Write(boundarybytes, 0, boundarybytes.Length)


            fileStream.Close()
        Next

        httpWebRequest2.ContentLength = memStream.Length
        Dim requestStream As Stream = httpWebRequest2.GetRequestStream()

        memStream.Position = 0
        Dim tempBuffer As Byte() = New Byte(memStream.Length - 1) {}
        memStream.Read(tempBuffer, 0, tempBuffer.Length)
        memStream.Close()
        requestStream.Write(tempBuffer, 0, tempBuffer.Length)
        requestStream.Close()


        Dim webResponse2 As WebResponse = httpWebRequest2.GetResponse()

        Dim stream2 As Stream = webResponse2.GetResponseStream()
        Dim reader2 As New StreamReader(stream2)

        Dim response$ = reader2.ReadToEnd()

        webResponse2.Close()
        httpWebRequest2 = Nothing
        webResponse2 = Nothing

        Return response
    End Function
    
    Private Shared Function InlineAssignHelper(Of T)(ByRef target As T, ByVal value As T) As T
        target = value
        Return value
    End Function
    
    Dim host$
    Dim srv$
    Private Sub genereateHOST()
        If ComboBox1.Text = "Use Random" Then
            host = "www" & RandomNumber(19, False) & ".multiupload.com"
            srv = "http://" & host & "/upload/?UPLOAD_IDENTIFIER=" & GenerateSID()
        Else
            host = "www" & ComboBox1.Text & ".multiupload.com"
            srv = "http://" & host & "/upload/?UPLOAD_IDENTIFIER=" & GenerateSID()
        End If

        tmp = Mid(host, 4)
        tmp = Replace(tmp, ".multiupload.com", "")
    End Sub

    Public Function RandomNumber(ByVal MaxNum As Long, ByVal IncludeZero As Boolean) As Long
        Dim NewMax As Long


        If IncludeZero = True Then
            Call Randomize()
            NewMax& = MaxNum& + 1&
            RandomNumber& = Int(NewMax& * Rnd())
        Else
            Call Randomize()
            RandomNumber& = Int((MaxNum& * Rnd()) + 1)
        End If
    End Function

    Private Function GenerateSID() As String
        Dim no1&, no2&

        Randomize()
        no1 = Int((10000 * Rnd()) + 1)
        Randomize()
        no2 = Int((10000 * Rnd()) + 1)

        Return no1 & "0" & no2
    End Function