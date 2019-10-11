Function SendEmail(ByVal ToAddress As String, ByVal FromAddress As String, ByVal MessageSubject As String, ByVal MessageBody As String)

        Dim MessageHead As String = "<html><head>"
        MessageHead = MessageHead & "<style>"
        MessageHead = MessageHead & "body {background-color:#F7F7F7; color:#000; font-family:arial,verdana,sans-serif; font-size:12px;}"
        MessageHead = MessageHead & "</style></head><body>"

        Dim MessageFoot As String = "</body></html>"

        MessageBody = MessageHead & MessageBody & MessageFoot

        Dim ReturnMessage As String = ""
        Dim mm As New MailMessage(FromAddress, ToAddress)
        Dim smtp As New SmtpClient

        mm.Subject = MessageSubject
        mm.Body = MessageBody
        mm.IsBodyHtml = True

        Try
            smtp.Host = "0.0.0.0"  'ADD HOST IP
            smtp.Send(mm)

            ReturnMessage = "Email has been dispatched"

        Catch ex As Exception
            ReturnMessage = "We're sorry, there has been an error: " & ex.Message
        End Try

        SendEmail = ReturnMessage

    End Function