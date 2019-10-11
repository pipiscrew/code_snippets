//Using Response.Write() in code-behind, places the string before the HTML of the page, so it’s not always useful.

//Solution 1
<script runat="server" type="C#">
    public string test_function()
    {
        if (DateTime.Now.Day == 25)
            return "25th day";
        else
            return "bar";
    }
</script>
 
<body>
      <%= test_function() %>
</body>
 

//Solution 2
<body>
      <%= (DateTime.Now.Day == 25) ? "25th day" : "bar" %>
</body>
 

//Solution 3
<body>
    <% if (DateTime.Now.Day == 25) { %>
        25th day
    <% } else { %>
        bar
    <%} %>
</body>

//Solution 4 – Literal ASP.NET Control
<!-- https://www.facebook.com/photo.php?v=794237593950519 -->
<%  
    if (DateTime.Now.Day == 25)
        Literal1.Text = "25th day";
    else
        Literal1.Text = "bar";
 %>
<body>
      <asp:Literal ID="Literal1" runat="server"></asp:Literal>
</body>