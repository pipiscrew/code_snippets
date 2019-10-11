using System;
using System.Reflection;
using System.Windows.Forms;

     string assemblyName = Assembly.ReflectionOnlyLoadFrom(args[0]).FullName;
     Clipboard.SetText(assemblyName);
     Console.WriteLine(assemblyName);