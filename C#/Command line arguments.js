//3rd way
string[] commandLineArgs = Environment.GetCommandLineArgs();
when 
t.exe /string+ /invoke- /method- "D:\test\frm4pr\WindowsFormsApplication1\WindowsFormsApplication1\bin\Release\WindowsFormsApplication1.exe"

fille the string[]


//1st way
string[] commandLineArgs = Environment.GetCommandLineArgs();
if (commandLineArgs.Length > 0)
{
    directoryName = Path.GetDirectoryName(commandLineArgs[0]);
}



//2nd way
public class CommandLine
{
   public static void Main(string[] args)
   {
       // The Length property is used to obtain the length of the array. 
       // Notice that Length is a read-only property:
       Console.WriteLine("Number of command line parameters = {0}",
          args.Length);
       for(int i = 0; i < args.Length; i++)
       {
           Console.WriteLine("Arg[{0}] = [{1}]", i, args[i]);
       }
   }
}

//http://stackoverflow.com/questions/491595/best-way-to-parse-command-line-arguments-in-c
//http://commandline.codeplex.com/
//http://commandlinearguments.codeplex.com/