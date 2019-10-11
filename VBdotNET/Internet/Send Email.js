//**************************************
// 
// Name: Send Email from NET
// Description:To send an Email from VB.
// NET
// By: Giuliano Gianfriglia
//
// Inputs:From, To, Subject, Content e F
// ile to Attach
//
// Returns:Nothing
//
// Assumes:In your project add my module
// , in a form add a Button and put that co
// de back:
sendmail("addressfrom", "addressto", "subjcet", "content", "")
That's all
//
//This code is copyrighted and has
// limited warranties.Please see http://
// www.Planet-Source-Code.com/vb/scripts/Sh
// owCode.asp?txtCodeId=6612&lngWId=10
//for details.
//**************************************
// 
Imports System.Net.Mail
Public Module mdlSendMail
Public Sub SendMail(ByVal FromAddress As String, ByVal ToAddress As String, ByVal MailSubject As String, ByVal MailContent As String, Optional ByVal MailAttach As Attachment = Nothing)
'#########################################
'# Create client for SMTP connection
'#########################################
Dim Client As New SmtpClient
Client.Host = "" '<= insert here your SMTP server
'#########################################
'# Declare Mail variable
'#########################################
Dim Mail_To As New MailAddress(ToAddress)
Dim Mail_From As New MailAddress(FromAddress)
Dim Mail_Message As New MailMessage(Mail_From, Mail_To)
'#########################################
'# Create Message
'#########################################
Message.Body = MailContent
Message.BodyEncoding = System.Text.Encoding.UTF8
Message.Subject = MailSubject
Message.SubjectEncoding = System.Text.Encoding.UTF8
Message.Attachments.Add(MailAttach)
'Send Mail
Client.Send(Message)
'#########################################
'# Delete ever reference
'#########################################
Client = Nothing
Message.Dispose()
End Sub
End Module
