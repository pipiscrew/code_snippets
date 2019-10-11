//properties : http://msdn.microsoft.com/en-us/library/aa767737(VS.85).aspx

        private void btnEmail_Click(object sender, EventArgs e)
        {
            if (lstEMAILS.SelectedItem != null)
            {
                try
                {
                    DataRowView dR = (DataRowView)lstEMAILS.SelectedItem;
                    string ml = dR["EMAIL"].ToString();

                    Process.Start("mailto:" + ml + "?subject=" + DateTime.Now.ToShortDateString() + "&body=Sent by " + Application.ProductName);
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message, General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                }
  
            }
        }
        
        
//http://stackoverflow.com/a/34770748
string mailto = string.Format("mailto:{0}?Subject={1}&Body={2}&cc={3}", "to@user.com", "Subject of message", "This is a body of a message", "tssso@user.com");
mailto = Uri.EscapeUriString(mailto);

System.Diagnostics.Process.Start(mailto);