EmailComposeTask emailComposeTask = new EmailComposeTask();
emailComposeTask.To = "user@example.com";
emailComposeTask.Body = "Email message body";
emailComposeTask.Cc = "user2@example.com";
emailComposeTask.Subject = "Email subject";
emailComposeTask.Show();