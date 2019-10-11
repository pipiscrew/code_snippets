//property KeyPreview = true @ form
        private void Form3_KeyPress(object sender, KeyPressEventArgs e)
        {
            if (e.KeyChar == (char)27)
            {
                e.Handled = true;
                this.DialogResult = DialogResult.Cancel;
            }
        }