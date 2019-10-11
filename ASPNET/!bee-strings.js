//http://stackoverflow.com/a/517742
//http://stackoverflow.com/a/649458

There are a several different 'bee-stings':

<%@ - Page/Control/Import/Register directive
<%$ - Resource access and Expression building
<%= - Explicit output to page, equivalent to <% Response.Write( ) %>
<%# - Data Binding. It can only used where databinding is supported, or at the page level if you call Page.DataBind() in your code-behind.
<%-- - Server-side comment block
<%: - Equivalent to <%=, but it also html-encodes the output.