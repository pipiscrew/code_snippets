'source:
'http://social.msdn.microsoft.com/forums/en-US/netfxnetcom/thread/6dfd0f95-29dd-42d3-9bfe-6dcc0536fcae
'http://www.vbdotnetforums.com/net-sockets/27189-http-get-images-using-tcpclient.html

	   Try
            Dim tcpClient As Sockets.TcpClient()
			Dim URIS As New Uri(URL) 'ww16.kjsdf.com
			
	        If ProxyIP.Length > 0 And ProxyPort > 0 Then
	            tcpClient = New TcpClient(ProxyIP, ProxyPort) '"41.190.16.17", 8080) 'URIS.DnsSafeHost, 80)
	        Else
	            tcpClient = New TcpClient(URIS.DnsSafeHost, 80)
	        End If

            Dim reqString As String = "GET " & "http://www.google.gr/search?q=vbnet+testproxy" & " HTTP/1.0" & vbCr & vbLf
            reqString += "User-agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.0.3705;)" & vbCr & vbLf
            reqString += "Accept:*.*" & vbCr & vbLf
            reqString += "Host:" & "www.google.gr" & vbCr & vbLf & vbCr & vbLf

            Dim request As Byte() = Encoding.UTF8.GetBytes(reqString)
            Dim stream As Sockets.NetworkStream = tcpClient.GetStream()

            stream.Write(request, 0, request.Length)

            Dim reader As New IO.StreamReader(tcpClient.GetStream, System.Text.Encoding.ASCII)

'ama kanoyme 
'Dim line As String = reader.ReadToEnd
'kai eimaste me proxy ton pernei!

            Dim line As String = reader.ReadLine
            Do While reader.Peek() >= 0
                line = line & reader.ReadLine & vbCrLf
            Loop

            Return line

        Catch ex As Exception
            Return ""
        End Try