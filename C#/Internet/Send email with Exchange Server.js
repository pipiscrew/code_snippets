string sSMTPHost = "relay.x.p1piscrew.com"; // exchange SMTP

StringBuilder sBody = new StringBuilder();
sBody.Append("Hi PipisCrew,<br> This is a test");

MailAddress from = new MailAddress("robot@p1piscrew.com");

MailMessage message = new MailMessage();

// Create  the file attachment for this e-mail message.
string csvFileFullPath = "W:\test.txt";
Attachment data = new Attachment(csvFileFullPath, MediaTypeNames.Application.Octet);
ContentDisposition disposition = data.ContentDisposition;
disposition.CreationDate = System.IO.File.GetCreationTime(csvFileFullPath);
disposition.ModificationDate = System.IO.File.GetLastWriteTime(csvFileFullPath);
disposition.ReadDate = System.IO.File.GetLastAccessTime(csvFileFullPath);

// Add the file attachment to this e-mail message.
message.Attachments.Add(data);

message.IsBodyHtml = true;
message.SubjectEncoding = Encoding.UTF8;
message.Subject = "test mail for exchange";
message.Body = sBody.ToString();
message.From = from;
message.To.Add("x@pip1screw.com");

SmtpClient smtpClient = new SmtpClient(sSMTPHost);

smtpClient.Send(message);


//using authentication follow :
//http://stackoverflow.com/a/18009190