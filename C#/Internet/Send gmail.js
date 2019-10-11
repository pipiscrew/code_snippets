//http://www.codeproject.com/Tips/680394/How-to-Create-a-Simple-Email-Sending-Software-Usin

        try
        {
            SmtpClient client = new SmtpClient("smtp.gmail.com");
            client.Port = 587;
            client.EnableSsl = true;
            client.Timeout = 100000;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential(
              "yourid@gmail.com", "yourgmailpassword");
            MailMessage msg = new MailMessage();
            msg.To.Add(textBox_To.Text);
            msg.From = new MailAddress("yourid@gmail.com");
            msg.Subject = textBox_Subject.Text;
            msg.Body = textBox_Message.Text;
            Attachment data = new Attachment(textBox_Attachment.Text);
            msg.Attachments.Add(data);
            client.Send(msg);
            MessageBox.Show("Successfully Sent Message.");
        }
        catch (Exception ex)
        {
            MessageBox.Show(ex.Message);
        }