Public Shared Function GetExternalIPAddress() As IPAddress
    Dim str As String
    Dim client As New WebClient
    Try 
        str = Encoding.UTF8.GetString(client.DownloadData("http://www.whatismyip.com/automation/n09230945.asp"))
    Catch exception1 As WebException
        Return Nothing
    End Try
    Try 
        Return IPAddress.Parse(str)
    Catch obj1 As Object
        Return Nothing
    End Try
End Function

 
