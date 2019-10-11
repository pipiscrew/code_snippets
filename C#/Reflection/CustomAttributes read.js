//https://stackoverflow.com/a/18765069/1320686

 Type myType = Type.GetType("YourNameSpace.MyClass");
 object[] atts = myType.GetCustomAttributes(true);
 
 //Refer Type.GetType for more info

var asnames = Assembly.GetExecutingAssembly().GetReferencedAssemblies();
var asmname = asnames.FirstOrDefault(x => x.Name == assemName);
Assembly.Load(asmname);


//no2
object[] atts = Type.GetType("MyNamesapce.MyClass").GetCustomAttributes(true);
//http://msdn.microsoft.com/en-us/library/system.attribute.getcustomattributes.aspx