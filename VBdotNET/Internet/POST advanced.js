'Basically, you would need to do the following:
'1. create a HttpWebRequest object and use HttpWebRequest.Method = "POST".
'2. set the Post data to contain whatever data you need the form to submit. This is similar to setting up a 'querystring for a GET Request, and you use Encoded name=value pairs.
'3. "Post" (i.e. execute and get the response for) the HttpWebRequest.

'Here is a sample Shared Function to get you started (It does GET requests, but you should be able to easily 'modify it to do POST requests).

    Imports System.IO

    '' <summary>
    '' Programmatically performs an HTTP request for the <paramref name="fullUrl" /> URL's content.
    '' </summary>
    '' <exception cref="System.Exception">
    '' Thrown if the HTTP Request fails, or if the <see cref="System.Net.HttpWebResponse" />
    '' has a <see cref="System.Net.HttpWebResponse.StatusCode" /> other than
    '' <see cref="System.Net.HttpStatusCode.OK" />.
    '' </exception>
    '' <returns>The content from the requested URL's HTTP Response.</returns>
    Public Shared Function ExecuteUrl( _
        ByVal fullUrl As String, _
        Optional ByVal bAllowAutoRedirect As Boolean = True, _
        Optional ByVal iTimeout As Integer = System.Threading.Timeout.Infinite _
    ) As String
        Dim webRequest As System.Net.HttpWebRequest
        Dim webResponse As System.Net.HttpWebResponse
        Try
            'Create an HttpWebRequest with the specified URL.
            webRequest = CType(System.Net.WebRequest.Create(fullUrl), System.Net.HttpWebRequest)
            webRequest.AllowAutoRedirect = bAllowAutoRedirect
            'webRequest.MaximumAutomaticRedirections = 50
            webRequest.Timeout = iTimeout

            'Send the request and wait for a response.
            Try
                webResponse = CType(webRequest.GetResponse(), System.Net.HttpWebResponse)
                Select Case (webResponse.StatusCode)
                    Case System.Net.HttpStatusCode.OK
                        'read the content from the response
                        Dim responseStream As System.IO.Stream = _
                            webResponse.GetResponseStream()
                        Dim responseEncoding As System.Text.Encoding = _
                            System.Text.Encoding.UTF8
                        ' Pipes the response stream to a higher level stream reader with the required encoding format.
                        Dim responseReader As New StreamReader(responseStream, responseEncoding)
                        Dim responseContent As String = _
                            responseReader.ReadToEnd()
                        Return responseContent
                    Case System.Net.HttpStatusCode.Redirect, System.Net.HttpStatusCode.MovedPermanently
                        Throw New System.Exception(String.Format( _
                            "Unable to read response content.  URL has moved. StatusCode={0}.", _
                            webResponse.StatusCode))
                    Case System.Net.HttpStatusCode.NotFound
                        Throw New System.Exception(String.Format( _
                            "Unable to read response content. URL not found. StatusCode={0}.", _
                            webResponse.StatusCode))
                    Case Else
                        Throw New System.Exception(String.Format( _
                            "Unable to read response content. StatusCode={0}.", _
                            webResponse.StatusCode))
                End Select
            Catch we As System.Net.WebException
                'If (we.Status = Net.WebExceptionStatus.Timeout) Then
                '    Return False
                'End If
                Throw New System.Exception( _
                    "Unable to execute URL.", _
                    we)
            Finally
                If (Not IsNothing(webResponse)) Then
                    webResponse.Close()
                End If
            End Try
        Catch e As System.Exception
            Throw New System.Exception( _
                "Unable to execute URL.", _
                e)
        End Try
    End Function
