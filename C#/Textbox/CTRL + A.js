private void anyTextBox_KeyPress(object sender, System.Windows.Forms.KeyPressEventArgs e)
{
	if (e.KeyChar == '\x1')
	{
		((TextBox)sender).SelectAll();
		e.Handled = true;
	}
}