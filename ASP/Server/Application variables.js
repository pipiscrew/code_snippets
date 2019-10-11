//https://support.microsoft.com/en-us/kb/300883

Think of the Application object as a global container for information that is available to all pages of your ASP application. You can store variables and object references in the Application object. The Application object is instantiated when the first page of your application is requested and remains available until the Web service is shut down.

To demonstrate how to use the Application object in an ASP page, follow these steps:
Paste the following code between the <BODY> </BODY> tags of the ASP page that you created earlier in Visual InterDev:

<%
   'Store information in an Application variable.
   Application("myvalue") = "something"

   'Display the contents of the Application variable.
   Response.Write Application("myvalue")
%>