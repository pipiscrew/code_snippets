//https://support.microsoft.com/en-us/kb/300883

The power of the Session object comes from the fact that it can store variables that are global to just that specific user; as a result, each user can have their own individual value for that variable. Session objects are not always created automatically for every user when they enter your application. However, storing or accessing a variable in the Session object creates the Session object and fires the Session_OnStart event.

To demonstrate how to use the Session object in an ASP page, follow these steps:
Paste the following code between the <BODY> </BODY> tags of the ASP page that you created earlier in Visual InterDev:

<%
   'Store information in a Session variable.
   Session("myInformation") = "somevalue"

   'Display the contents of the Session variable.
   Response.Write Session("myInformation")
%>


//remove
Session.Contents.Remove("myInformation")