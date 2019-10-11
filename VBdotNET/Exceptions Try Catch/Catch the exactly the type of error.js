'http://msdn.microsoft.com/en-us/library/system.net.mail.smtpexception.aspx

'sto status = SmtpStatusCode.MailboxBusy
        Try
            client.Send(message)
        Catch ex As SmtpFailedRecipientsException
            For i As Integer = 0 To ex.InnerExceptions.Length - 1
                Dim status As SmtpStatusCode = ex.InnerExceptions(i).StatusCode
                If status = SmtpStatusCode.MailboxBusy OrElse status = SmtpStatusCode.MailboxUnavailable Then
                    Console.WriteLine("Delivery failed - retrying in 5 seconds.")
                    System.Threading.Thread.Sleep(5000)
                    client.Send(message)
                Else
                    Console.WriteLine("Failed to deliver message to {0}", ex.InnerExceptions(i).FailedRecipient)
                End If
            Next



        End Try