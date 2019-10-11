        Private Function ReadURL(ByVal URL$) As String
            Dim request As HttpWebRequest = DirectCast(WebRequest.Create(URL), HttpWebRequest)
            request.CookieContainer = New CookieContainer
            request.CookieContainer.Add(CookieCollection("http://www.google.com"))

            MsgBox(request.CookieContainer.Count)

            Dim response As HttpWebResponse = DirectCast(request.GetResponse(), HttpWebResponse)

            Dim receiveStream As Stream = response.GetResponseStream()
            Dim readStream As New StreamReader(receiveStream, True)
            Return readStream.ReadToEnd()
         End Sub       
         
         

<DllImport("wininet.dll", CharSet:=CharSet.Auto, SetLastError:=True)> _
  Public Shared Function InternetGetCookie(ByVal url As String, ByVal name As String, ByVal data As StringBuilder, ByRef dataSize As Integer) As Boolean
        End Function

        Private Shared Function RetrieveIECookiesForUrl(ByVal url As String) As String
            Dim cookieHeader As New StringBuilder(New String(" "c, 256), 256)
            Dim datasize As Integer = cookieHeader.Length
            If Not InternetGetCookie(url, Nothing, cookieHeader, datasize) Then
                If datasize < 0 Then
                    Return [String].Empty
                End If
                cookieHeader = New StringBuilder(datasize)
                ' resize with new datasize 
                InternetGetCookie(url, Nothing, cookieHeader, datasize)
            End If
            Return cookieHeader.ToString()
        End Function

        Public Shared Function GetCookieContainerForUrl(ByVal url As Uri) As CookieContainer
            Dim container As New CookieContainer()
            Dim cookieHeaders As String = RetrieveIECookiesForUrl(url.AbsoluteUri)
            If cookieHeaders.Length > 0 Then
                Try
                    container.SetCookies(url, cookieHeaders)
                Catch generatedExceptionName As CookieException
                End Try
            End If
            Return container
        End Function

        Public Function CookieCollection(ByVal url As String) As CookieCollection

            Dim container As CookieContainer = CookieContainer2(url)

            Dim uri As New Uri(url)
            Return container.GetCookies(uri)
        End Function


        Public Function CookieContainer2(ByVal url As String) As CookieContainer
            Dim container As New CookieContainer

            Dim uri As New Uri(url)

            Dim cookieHeaders As String = RetrieveIECookiesForUrl(uri.AbsoluteUri)

            If cookieHeaders.Length > 0 Then
                container.SetCookies(uri, cookieHeaders)
            End If

            Return container
        End Function