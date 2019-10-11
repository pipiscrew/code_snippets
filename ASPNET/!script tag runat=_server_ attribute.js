Is used to include server-side code (C# or VB.NET)
on the aspx or ascx file without having to add a code-behind (.cs) file.

<script runat="server">

  Sub Button1_Click(ByVal sender As Object, ByVal e As System.EventArgs)
    Label1.Text = "Hello " & TextBox1.Text
  End Sub
</script>