//http://www.codeproject.com/Articles/700211/Csharp-SMTP-Configuration-for-Outlook-Com-SMTP-Hos

To create an App-Specific Password, log in to your Outlook.com account, and go to Account Settings –> Security Info –> App Passwords
Click on the Create a new app password link, and voila – you now have a new password for use within your application

^Use this as the password in your code,


//the call
    static void Main(string[] args)
    {
        string mailUser = "YourAccount@outlook.com";
        string mailUserPwd = "YourPassword";
  
        var sender = new OutlookDotComMail(mailUser, mailUserPwd);
        sender.SendMail("recipient@example.com", "Test Mail", "Hello!");
    }



//the class
 
// You will need to add a reference to this library:
using System.Net.Mail;
  
namespace SmtpMailConnections
{
    public class OutlookDotComMail
    {
        string _sender = "";
        string _password = "";
        public OutlookDotComMail(string sender, string password)
        {
            _sender = sender;
            _password = password;
        }  
  
        public void SendMail(string recipient, string subject, string message)
        {
            SmtpClient client = new SmtpClient("smtp-mail.outlook.com");
  
            client.Port = 587;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            System.Net.NetworkCredential credentials = 
                new System.Net.NetworkCredential(_sender, _password);
            client.EnableSsl = true;
            client.Credentials = credentials;
  
            try
            {
                var mail = new MailMessage(_sender.Trim(), recipient.Trim());
                mail.Subject = subject;
                mail.Body = message;
                client.Send(mail);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw ex;
            }
        }
    }
}