string[] test = new string[2];

test[0] = "Hello ";
test[1] = "World!";

string.Join("", test);


//join from LINQ 2D array to string 
String.Join(",", type.Properties.Select(p => p.Name + " = " + p.Argument.Value).ToArray())
//ex.                 
//var ass_attributes = assembly.CustomAttributes.OrderBy(p => p.AttributeType.FullName).Select(type => new { name = type.AttributeType.FullName, args = String.Join(",", type.ConstructorArguments.Select(p => p.Value).ToArray()), props = String.Join(",", type.Properties.Select(p => p.Name + " = " + p.Argument.Value).ToArray()) }).ToList();