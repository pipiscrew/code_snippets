//http://snipplr.com/view/2140/csharp-reading-string-from-resource-file--------------------/
/*
The resource file stores items as name-value pair.
 
To get string values from the resource files (.resx) added in your project, use the following code.
*/

VS Explorer > New Item > Resources File > Filename > 
>>>>>>>>>Strings
 
using System.Resources;
using System.Reflection;
 
// Create the resource manager.
 Assembly assembly = this.GetType().Assembly;
 
//ResFile.Strings -> <Namespace>.<ResourceFileName i.e. Strings.resx> 
resman = new ResourceManager("TestApp.Strings", assembly);
 
// Load the value of string value for Client
strClientName = resman.GetString("Client");