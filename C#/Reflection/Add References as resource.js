//it's from the book 
//OReilly.C.Sharp.4.0.in.a.Nutshell

using System;
using System.IO;
using System.Reflection;
using System.Collections.Generic;

public class Loader
{
  static Dictionary <string, Assembly> libs
   = new Dictionary <string, Assembly>();

  static void Main()
  {
    AppDomain.CurrentDomain.AssemblyResolve += FindAssem;
    Program.Go();
  }

  static Assembly FindAssem (object sender, ResolveEventArgs args)
  {
    string shortName = new AssemblyName (args.Name).Name;
    if (libs.ContainsKey (shortName)) return libs [shortName];

    using (Stream s = Assembly.GetExecutingAssembly().
           GetManifestResourceStream ("Libs." + shortName + ".dll"))
    {
       byte[] data = new BinaryReader (s).ReadBytes ((int) s.Length);
       Assembly a = Assembly.Load (data);
       libs [shortName] = a; 
       return a;
    }
  }
}

public class Program
{
  public static void Go()
  {
    // Run main program...
  }
}