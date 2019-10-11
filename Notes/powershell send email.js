//https://www.makeuseof.com/tag/send-email-windows-powershell/

$From = "EmailAddress@gmail.com"
$To = "SomeOtherAddress@whatever.com"
$Cc = "AThirdUser@somewhere.com"
$Attachment = "C:\users\Username\Documents\SomeTextFile.txt"
$Subject = "Here's the Email Subject"
$Body = "This is what I want to say"
$SMTPServer = "smtp.gmail.com"
$SMTPPort = "587"
Send-MailMessage -From $From -to $To -Cc $Cc -Subject $Subject -Body $Body -SmtpServer $SMTPServer -port $SMTPPort -UseSsl -Credential (Get-Credential) -Attachments $Attachment –DeliveryNotificationOption OnSuccess


1-save to test.ps1
2-open powershell, navigate to dir contains test.ps1
3-to execute type :
.\test.ps1
4-if got "cannot be loaded because the execution of scripts is disabled on this system"
5-run :
Set-ExecutionPolicy RemoteSigned


// https://blogs.msdn.microsoft.com/kebab/2014/04/28/executing-powershell-scripts-from-c/
// http://www.itprotoday.com/management-mobility/running-powershell-scripts-easy-1-2-3