//http://www.pipiscrew.com/2016/01/asp-net-usercontrol-ascx/

//method into page w/ parent System.Web.UI.Page

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        GetDynamicPageCodeFromFile();
    }
 
    public void GetDynamicPageCodeFromFile()
    {
        UserControl viewControl = null;
        try
        {
            viewControl = (UserControl)this.LoadControl("~/WebUserControl1.ascx");
        }
        catch (Exception)        {        }
 
        if (viewControl != null) this.Controls.Add(viewControl);
    }
}


//method in diff class (using inheritance)

//General.cs
public class General : System.Web.UI.Page
{
    public void GetDynamicPageCodeFromFile()
    {
        UserControl viewControl = null;
        try
        {
            viewControl = (UserControl)this.LoadControl("~/WebUserControl1.ascx");
        }
        catch (Exception)        {        }
 
        if (viewControl != null) this.Controls.Add(viewControl);
    }
}
 
//Default2.aspx.cs
public partial class Default2 : General
{
    protected void Page_Load(object sender, EventArgs e)
    {
        GetDynamicPageCodeFromFile();
    }
}
 
//Default2.aspx (remains as is)
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default2.aspx.cs" Inherits="Default2" %>
