protected void Page_Load(object sender, EventArgs e)
{

    this.Controls.Add(new LiteralControl(Server.HTMLEncode("<h1>Welcome!</h1>")));
    //will actually print <h1>Welcome!</h1>, rather than Welcome! that's bolded/centered/etc.
}