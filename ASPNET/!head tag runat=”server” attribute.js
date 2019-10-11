//http://stackoverflow.com/a/11510589

The head element contains a runat=”server” attribute, which indicates that it is a server control (rather than static HTML). All ASP.NET pages derive from the Page class, which is located in the System.Web.UI namespace. This class contains a Header property that provides access to the page’s region. Using the Header property we can set an ASP.NET page’s title or add additional markup to the rendered section. It is possible, then, to customize a content page’s element by writing a bit of code in the page’s Page_Load event handler.


//before WebForm1.aspx
<head runat="server">
    <title></title>
</head>

//The code WebForm1.aspx.cs
        protected void Page_Load(object sender, EventArgs e)
        {
            HtmlMeta x=new HtmlMeta();
            x.Name = "keywords";
            x.Content = "master page,asp.net,tutorial";
            Page.Header.Controls.Add(x);
        }
        
//when running WebForm1.aspx
<head runat="server">
    <title></title>
    <meta name="keywords" content="master page,asp.net,tutorial" />
</head>
        