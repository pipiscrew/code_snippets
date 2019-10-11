//http://forums.asp.net/t/1674424.aspx
//only one is allowed to give runat=server

    <form id="form1" runat="server">
    </form>

    <form id="form2">
        test inside form2
    </form>

    <form id="form3">
        text inside form3
    </form>
    This is some text outside the forms.
    
    
Technically ASP.NET there is no direct support form multi forms. But you can use Panel object

        <asp:Panel ID="Panel1" runat="server" DefaultButton="btnSave">
        </asp:Panel>

place your form content iside the panel.