//http://odetocode.com/articles/80.aspx

//Once I was faced with a scenario where we needed client specific calculations applied to the results of a SQL query. The situation cried out for a “eval” type method where we could just plug values into a custom equation and retrieve a result. VBScript, JScript.NET, and JavaScript all contain an eval method, where you can pass a string containing a valid expression for the language and retrieve a result – dynamic execution.


using System;
using System.CodeDom.Compiler;
using System.Reflection;
using Microsoft.JScript;

namespace OdeToCode.Utility
{
   public class Evaluator
   {
      public static int EvalToInteger(string statement)
      {
         string s = EvalToString(statement);
         return int.Parse(s.ToString());
      }

      public static double EvalToDouble(string statement)
      {
         string s = EvalToString(statement);
         return double.Parse(s);
      }

      public static string EvalToString(string statement)
      {
         object o = EvalToObject(statement);
         return o.ToString();
      }

      public static object EvalToObject(string statement)
      {
         return _evaluatorType.InvokeMember(
                     "Eval", 
                     BindingFlags.InvokeMethod, 
                     null, 
                     _evaluator, 
                     new object[] { statement } 
                  );
      }
               
      static Evaluator()
      {
         ICodeCompiler compiler;
         compiler = new JScriptCodeProvider().CreateCompiler();

         CompilerParameters parameters;
         parameters = new CompilerParameters();
         parameters.GenerateInMemory = true;
         
         CompilerResults results;
         results = compiler.CompileAssemblyFromSource(parameters, _jscriptSource);

         Assembly assembly = results.CompiledAssembly;
         _evaluatorType = assembly.GetType("Evaluator.Evaluator");
         
         _evaluator = Activator.CreateInstance(_evaluatorType);
      }
      
      private static object _evaluator = null;
      private static Type _evaluatorType = null;
      private static readonly string _jscriptSource = 
         
          @"package Evaluator
            {
               class Evaluator
               {
                  public function Eval(expr : String) : String 
                  { 
                     return eval(expr); 
                  }
               }
            }";
   }
}