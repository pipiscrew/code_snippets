'source
'http://stackoverflow.com/questions/566462/upload-files-with-httpwebrequest-multipart-form-data

    Dim host$
    Dim srv$
    
    Public Shared Sub HttpUploadFile(ByVal url As String, ByVal file As String, ByVal paramName As String, ByVal contentType As String, ByVal nvc As NameValueCollection)
        Debug.Print(String.Format("Uploading {0} to {1}", file, url))
        Dim boundary As String = "---------------------------" & DateTime.Now.Ticks.ToString("x")
        Dim boundarybytes As Byte() = System.Text.Encoding.ASCII.GetBytes(vbCr & vbLf & "--" & boundary & vbCr & vbLf)

        Dim wr As HttpWebRequest = DirectCast(WebRequest.Create(url), HttpWebRequest)
        wr.ContentType = "multipart/form-data; boundary=" & boundary
        wr.Method = "POST"
        wr.KeepAlive = True
        wr.Credentials = System.Net.CredentialCache.DefaultCredentials

        Dim rs As Stream = wr.GetRequestStream()

        Dim formdataTemplate As String = "Content-Disposition: form-data; name=""{0}""" & vbCr & vbLf & vbCr & vbLf & "{1}"
        For Each key As String In nvc.Keys
            rs.Write(boundarybytes, 0, boundarybytes.Length)
            Dim formitem As String = String.Format(formdataTemplate, key, nvc(key))
            Dim formitembytes As Byte() = System.Text.Encoding.UTF8.GetBytes(formitem)
            rs.Write(formitembytes, 0, formitembytes.Length)
        Next
        rs.Write(boundarybytes, 0, boundarybytes.Length)

        Dim headerTemplate As String = "Content-Disposition: form-data; name=""{0}""; filename=""{1}""" & vbCr & vbLf & "Content-Type: {2}" & vbCr & vbLf & vbCr & vbLf
        Dim header As String = String.Format(headerTemplate, paramName, file, contentType)
        Dim headerbytes As Byte() = System.Text.Encoding.UTF8.GetBytes(header)
        rs.Write(headerbytes, 0, headerbytes.Length)

        Dim fileStream As New FileStream(file, FileMode.Open, FileAccess.Read)
        Dim buffer As Byte() = New Byte(4095) {}
        Dim bytesRead As Integer = 0
        While (InlineAssignHelper(bytesRead, fileStream.Read(buffer, 0, buffer.Length))) <> 0
            rs.Write(buffer, 0, bytesRead)
        End While
        fileStream.Close()

        Dim trailer As Byte() = System.Text.Encoding.ASCII.GetBytes(vbCr & vbLf & "--" & boundary & "--" & vbCr & vbLf)
        rs.Write(trailer, 0, trailer.Length)
        rs.Close()

        Dim wresp As WebResponse = Nothing
        Try
            wresp = wr.GetResponse()
            Dim stream2 As Stream = wresp.GetResponseStream()
            Dim reader2 As New StreamReader(stream2)
            Debug.Print(String.Format("File uploaded, server response is: {0}", reader2.ReadToEnd()))
        Catch ex As Exception
            Debug.Print("Error uploading file", ex)
            If wresp IsNot Nothing Then
                wresp.Close()
                wresp = Nothing
            End If
        Finally
            wr = Nothing
        End Try
    End Sub

    Private Shared Function InlineAssignHelper(Of T)(ByRef target As T, ByVal value As T) As T
        target = value
        Return value
    End Function

    Private Sub Button4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button4.Click
        genereateHOST()

        Dim nvc As New NameValueCollection()
        nvc.Add("host", host)
        nvc.Add("u", "7DR9ZOVUPLBVQSXZ3X0N427CCHG5SLTE")
        HttpUploadFile(srv, lstv.Items(0).Text, "file_0", "multipart/form-data", nvc) '"image/jpeg"

        MsgBox("done!")
    End Sub


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