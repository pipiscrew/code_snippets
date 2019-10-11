//http://www.codeproject.com/Tips/715891/Compiling-Csharp-Code-at-Runtime
//alternative ready2use http://www.csscript.net/
public static MethodInfo CreateFunction(string function)
{
    string code = @"
        using System;
            
        namespace UserFunctions
        {                
            public class BinaryFunction
            {                
                public static double Function(double x, double y)
                {
                    return func_xy;
                }
            }
        }
    ";

    string finalCode = code.Replace("func_xy", function);

    CSharpCodeProvider provider = new CSharpCodeProvider();
    CompilerResults results = provider.CompileAssemblyFromSource(new CompilerParameters(), finalCode);

    Type binaryFunction = results.CompiledAssembly.GetType("UserFunctions.BinaryFunction");
    return binaryFunction.GetMethod("Function");
}

//replace math expression + execute! 
MethodInfo function = CreateFunction("x + 2 * y");
object result = function.Invoke(null, new object[] { 2, 3 });
Console.WriteLine(result);

//via delegate
var betterFunction = (Func<double, double, double>)Delegate.CreateDelegate
(typeof(Func<double, double, double>), function);

	//invoke delefate
	double result = betterFunction(2, 3);
	Console.WriteLine(result);
	
	
//output exe!
//http://msdn.microsoft.com/en-us/library/system.codedom.compiler.compilerparameters.generateinmemory(v=vs.110).aspx
//you should add one Compiler Parameter - OutputAssembly - and set the other two parameters:
parameters.GenerateInMemory = false;
parameters.GenerateExecutable = true;
parameters.OutputAssembly = @"yourPath.exe";