//https://msdn.microsoft.com/en-us/library/sbz9etab.aspx?cs-save-lang=1&cs-lang=csharp

//WebUserControl1.ascx
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="WebUserControl1.ascx.cs" Inherits="WebApplication6ascx.WebUserControl1" %>
 
<b>------------------------------------------</b>
~~TEST~~
<b>------------------------------------------</b>
 
//WebForm1.aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication6ascx.WebForm1" %>
 
<%@ Register TagPrefix="uc" TagName="Spinner"
    Src="~/WebUserControl1.ascx" %>
 
<!DOCTYPE html>
 
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="Form1" runat="server">
        <uc:Spinner id="Spinner1"
            runat="server" />
    </form>
</body>
</html>