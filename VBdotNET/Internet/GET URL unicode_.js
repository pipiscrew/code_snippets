        Dim req As WebRequest = WebRequest.Create(url)
        Dim res As WebResponse = req.GetResponse()

        Dim sr As New StreamReader(res.GetResponseStream(), System.Text.Encoding.GetEncoding("ISO-8859-7"))
        Dim result As String = sr.ReadToEnd()