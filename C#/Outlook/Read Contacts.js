//we add references from NET tab to
//Microsoft.Office.Interop.Outlook
//http://www.pcreview.co.uk/forums/get-contacts-outlook-2007-c-t3631212.html
//http://social.msdn.microsoft.com/Forums/en-US/vsofficetools2008prerelease/thread/dc583cc7-47f9-4fd1-a8f1-d409cde0c235

using Outlook = Microsoft.Office.Interop.Outlook;

        private void button1_Click(object sender, EventArgs e)
        {
            // Obtain an instance of the Outlook application
            Outlook.Application app = new Outlook.ApplicationClass();

            // Access the MAPI namespace
            Outlook.NameSpace ns = app.GetNamespace("MAPI");

            // Get the user's default contacts folder
            Outlook.MAPIFolder contacts =
            ns.GetDefaultFolder(Outlook.OlDefaultFolders.olFolderContacts);

            // Iterate through each contact
            for (int i = 1; i < contacts.Items.Count + 1; i++)
            {
                          // Get a contact
                Outlook.ContactItem contact =
                (Outlook.ContactItem)contacts.Items[i];
                textBox1.Text += contact.FullName + " (" +
                contact.Email1Address + ")" + Environment.NewLine;
            }
        }