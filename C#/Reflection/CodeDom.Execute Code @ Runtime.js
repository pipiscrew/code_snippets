using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.CSharp;
using System.CodeDom.Compiler;

namespace XP
{
    class Program
    {
        static void Main(string[] args)
        {
            var csc = new CSharpCodeProvider(new Dictionary<string, string>() { { "CompilerVersion", "v2.0" } });
            var parameters = new CompilerParameters();
            parameters.GenerateExecutable = true;
            CompilerResults results = csc.CompileAssemblyFromSource(parameters,
          @"using System;
            class Program {
              public static void Main() {
                for (int i = 0; i < 100; i++)
                  Console.WriteLine(i);
              }
            }");
            results.CompiledAssembly.EntryPoint.Invoke(null, null);
        }
    }
}

//run @ frm3.5
//http://stackoverflow.com/questions/1200639/csharpcodeprovider-seems-to-be-stuck-at-net-2-0-how-do-i-get-new-features
Dictionary<string,string> options = new Dictionary<string,string>
{ 
    { "CompilerVersion", "v3.5" }
};

var compiler = new CSharpCodeProvider(options);