If you use TextBox.AppendText(string text), it will automatically scroll to the end of the newly appended text.

otherwise use :
myTextBox.SelectionStart = myTextBox.Text.Length;
myTextBox.ScrollToCaret();

           
        private void Scroll2END()
        {
            txtSQL.SelectionStart = txtSQL.Text.Length;
            txtSQL.ScrollToCaret();
            txtSQL.Refresh();
        }