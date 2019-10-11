        
        //add to all control the same event
        private void ValidateInteger_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == (char)(8))
                return;
            else if (!char.IsDigit(e.KeyChar))
                e.Handled = true;
        }