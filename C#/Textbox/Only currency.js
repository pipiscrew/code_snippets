       
		//add to all control the same event
        private void ValidateNumeric_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == (char)(46))
                e.KeyChar = (char)(44);
            if (e.KeyChar == (char)(8) | e.KeyChar == (char)(44))
                return;
            if (!char.IsDigit(e.KeyChar))
                e.Handled = true;
        }
        
        
        //validate also dont enter 2nd comma
        private void ValidateNumeric_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == (char)(46))
                e.KeyChar = (char)(44);

            if (e.KeyChar == (char)(44))
                if ((sender as KryptonTextBox).Text.IndexOf(",") > -1)
                {
                    e.Handled = true;
                    return;
                }

            if (e.KeyChar == (char)(8) | (e.KeyChar == (char)(44)))
                return;

            if (!char.IsDigit(e.KeyChar))
                e.Handled = true;
        }
        
        + we get the field from dbase with
        txtORIO_PISTWSHS.Text = CONTRACTSOBJ.ORIO_PISTWSHS.ToString("N");
        so we have 1.000.000,78
        
        //with culture
        //.ToString("N",new CultureInfo("en-US"))
        //http://stackoverflow.com/questions/105770/net-string-format-to-add-commas-in-thousands-place-for-a-number