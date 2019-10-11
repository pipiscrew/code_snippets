'source=http://www.developer.com/net/vb/article.php/3113371

Public Function GetPageHTML( _
           ByVal URL As String) As String
  ' Retrieves the HTML from the specified URL
  Dim objWC As New System.Net.WebClient()
  Return New System.Text.UTF8Encoding().GetString( _
     objWC.DownloadData(URL))
End Function


Sometimes, you don't have that luxury. Say you're running a Web site that needs to retrieve the HTML, parse it, and display results to a user. You can't wait two minutes for the server to respond, then download the page and feed it back to your visitor. You need a response within ten seconds-or not at all.

Public Function GetPageHTML(ByVal URL As String, _
      Optional ByVal TimeoutSeconds As Integer = 10) _
      As String
   ' Retrieves the HTML from the specified URL,
   ' using a default timeout of 10 seconds
   Dim objRequest As Net.WebRequest
   Dim objResponse As Net.WebResponse
   Dim objStreamReceive As System.IO.Stream
   Dim objEncoding As System.Text.Encoding
   Dim objStreamRead As System.IO.StreamReader

   Try
       ' Setup our Web request
       objRequest = Net.WebRequest.Create(URL)
       objRequest.Timeout = TimeoutSeconds * 1000
       ' Retrieve data from request
       objResponse = objRequest.GetResponse
       objStreamReceive = objResponse.GetResponseStream
       objEncoding = System.Text.Encoding.GetEncoding( _
           "utf-8")
       objStreamRead = New System.IO.StreamReader( _
           objStreamReceive, objEncoding)
       ' Set function return value
       GetPageHTML = objStreamRead.ReadToEnd()
       ' Check if available, then close response
       If Not objResponse Is Nothing Then
           objResponse.Close()
       End If
   Catch
       ' Error occured grabbing data, simply return nothing
       Return ""
   End Try
End Function


**Remember, the timeout we've added is for our request to be acknowledged by the server, rather than for the full HTML to have been received**

    Private Function ReadURL(ByVal URL$) As String
        Dim myClient As Net.WebClient = New Net.WebClient()
        Dim response As Stream = myClient.OpenRead(URL)

        Dim tempBuffer(10000000) As Byte
        Dim enc As New System.Text.ASCIIEncoding
        Dim strResponse$

        response.Read(tempBuffer, 0, 10000000)     ' Read

        response.Close()
        response.Dispose()
        myClient.Dispose()

        strResponse = enc.GetString(tempBuffer)             ' Put the response

        Return strResponse
    End Function

    Private Function ReadURL(ByVal URL$) As String
        Dim request As HttpWebRequest = CType(WebRequest.Create(URL), HttpWebRequest)
        ' Set some reasonable limits on resources used by this request
        request.MaximumAutomaticRedirections = 4
        request.MaximumResponseHeadersLength = 4

        ' Set credentials to use for this request.
        request.Credentials = CredentialCache.DefaultCredentials

        Dim response As HttpWebResponse = CType(request.GetResponse(), HttpWebResponse)

        'Console.WriteLine("Content length is {0}", response.ContentLength)
        'Console.WriteLine("Content type is {0}", response.ContentType)

        ' Get the stream associated with the response.
        Dim receiveStream As Stream = response.GetResponseStream()

        ' Pipes the stream to a higher level stream reader with the required encoding format. 
        Dim readStream As New StreamReader(receiveStream, True)

        'Console.WriteLine("Response stream received.")
        'Console.WriteLine(readStream.ReadToEnd())

        Return readStream.ReadToEnd()

        response.Close()
        readStream.Close()
        readStream.Dispose()
    End Function