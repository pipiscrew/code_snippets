//http://www.blackwasp.co.uk/ReflectionLateBinding_3.aspx
//The following code uses the public constructor of the CustomMesageGenerator class, which has a single parameter. The call to CreateInstance passes the string, "Test!", to this parameter.

Assembly asm = Assembly.LoadFile(@"c:\test\MessageGenerators.dll");
Type type = asm.GetType("MessageGenerators.CustomMessageGenerator");
object lateBound = Activator.CreateInstance(type, "Test!");
Console.WriteLine(lateBound.ToString());

//Activation Using Any Public or Non-Public Constructor
The code below instantiates a CustomMessageGenerator using the private constructor with two arguments.
Assembly asm = Assembly.LoadFile(@"c:\test\MessageGenerators.dll");
Type type = asm.GetType("MessageGenerators.CustomMessageGenerator");
object[] parameters = new object[] { "Test", "Message" };
object lateBound = Activator.CreateInstance(
    type, BindingFlags.NonPublic | BindingFlags.Instance, null, parameters, null);
Console.WriteLine(lateBound.ToString());