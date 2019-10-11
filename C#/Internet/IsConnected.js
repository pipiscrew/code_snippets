        private bool IsConnected()
        {
            try
            {
                System.Net.IPHostEntry objIPHE = System.Net.Dns.GetHostEntry("www.google.com");
                return true;
            }
            catch
            {
                MessageBox.Show("...No Conn...");
                return false;
            }
        }