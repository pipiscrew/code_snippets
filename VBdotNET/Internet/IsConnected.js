Public Function GotInternet() As Boolean
        Dim req As System.Net.HttpWebRequest
        Dim res As System.Net.HttpWebResponse
        GotInternet = False
        Try
            req = CType(System.Net.HttpWebRequest.Create("http://www.google.com"), System.Net.HttpWebRequest)
            res = CType(req.GetResponse(), System.Net.HttpWebResponse)
            req.Abort()
            If res.StatusCode = System.Net.HttpStatusCode.OK Then
                GotInternet = True
            End If
        Catch weberrt As System.Net.WebException
            GotInternet = False
        Catch except As Exception
            GotInternet = False
        End Try
    End Function