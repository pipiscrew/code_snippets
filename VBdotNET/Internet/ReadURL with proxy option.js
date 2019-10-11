    Public Function ReadHTML(ByVal ID As Integer) As String 'Optional ByVal ID As Integer = 0) As String
        Dim num As Integer = 0
        Dim requestUriString As String = URL
        Dim httpRequest As HttpWebRequest = DirectCast(WebRequest.Create(requestUriString), HttpWebRequest)

        If ProxyIP.Length > 0 And ProxyPort > 0 Then
            Dim proxy As New WebProxy(ProxyIP, ProxyPort)
            proxy.BypassProxyOnLocal = True
            httpRequest.Proxy = proxy
        End If

        Try
            httpRequest.Timeout = -1 ' = &HFA0
            Dim reader As New StreamReader(httpRequest.GetResponse.GetResponseStream)
            Dim wert As String = reader.ReadToEnd.Trim
            reader.Close()

            If ReadHTMLinternal = False Then
                RaiseEvent ReadHTLMResponse(wert, ID)
            End If

            Return wert
        Catch exception1 As WebException
            Return ""
        End Try
    End Function