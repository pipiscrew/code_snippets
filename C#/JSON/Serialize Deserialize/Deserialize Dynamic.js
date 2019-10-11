//http://stackoverflow.com/a/6321697
//Assembly System.Web.Extensions.dll, v4.0.0.0
// C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\.NETFramework\v4.5\System.Web.Extensions.dll
 
//ask web service
string d = executeRequest(tmp);
 
//dynamic deserialize the JSON
JavaScriptSerializer js = new JavaScriptSerializer();
dynamic x=js.Deserialize<dynamic>(d);
 
//access the JSON dynamic fields
Console.WriteLine(x["total"]);