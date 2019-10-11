//https://social.msdn.microsoft.com/Forums/en-US/c670145c-3612-481a-877e-dab00cd4189c/hotkey-in-c?forum=Vsexpressvcs

public Form1()
{
	InitializeComponent();
	this.KeyPreview = true; //Form handles keyinput
	// BEFORE textbox/list/... does
	this.KeyUp += new KeyEventHandler(Form1_KeyUp);
}
void Form1_KeyUp(object sender, KeyEventArgs e)
{
	if (e.KeyCode == Keys.F5)
	{
		Form5 frm = new Form5();
		frm.ShowDialog();
	}
}