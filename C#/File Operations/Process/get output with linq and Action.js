//http://csharptest.net/532/using-processstart-to-capture-console-output/

  Action<String> print = new Action<String>(Print);
  
/// <summary>
/// Runs the specified executable with the provided arguments and returns the process' exit code.
/// </summary>
/// <param name="output">Recieves the output of either std/err or std/out</param>
/// <param name="input">Provides the line-by-line input that will be written to std/in, null for empty</param>
/// <param name="exe">The executable to run, may be unqualified or contain environment variables</param>
/// <param name="args">The list of unescaped arguments to provide to the executable</param>
/// <returns>Returns process' exit code after the program exits</returns>
/// <exception cref="System.IO.FileNotFoundException">Raised when the exe was not found</exception>
/// <exception cref="System.ArgumentNullException">Raised when one of the arguments is null</exception>
/// <exception cref="System.ArgumentOutOfRangeException">Raised if an argument contains '\0', '\r', or '\n'
public static int Run(Action<string> output, TextReader input, string exe, params string[] args)
{
if (String.IsNullOrEmpty(exe))
throw new FileNotFoundException();
if (output == null)
throw new ArgumentNullException("output");
 
ProcessStartInfo psi = new ProcessStartInfo();
psi.UseShellExecute = false;
psi.RedirectStandardError = true;
psi.RedirectStandardOutput = true;
psi.RedirectStandardInput = true;
psi.WindowStyle = ProcessWindowStyle.Hidden;
psi.CreateNoWindow = true;
psi.ErrorDialog = false;
psi.WorkingDirectory = Environment.CurrentDirectory;
psi.FileName = FindExePath(exe); //see http://csharptest.net/?p=526
psi.Arguments = EscapeArguments(args); // see http://csharptest.net/?p=529
 
using (Process process = Process.Start(psi))
using (ManualResetEvent mreOut = new ManualResetEvent(false),
mreErr = new ManualResetEvent(false))
{
process.OutputDataReceived += (o, e) => { if (e.Data == null) mreOut.Set(); else output(e.Data); };
process.BeginOutputReadLine();
process.ErrorDataReceived += (o, e) => { if (e.Data == null) mreErr.Set(); else output(e.Data); };
process.BeginErrorReadLine();
 
string line;
while (input != null && null != (line = input.ReadLine()))
process.StandardInput.WriteLine(line);
 
process.StandardInput.Close();
process.WaitForExit();
 
mreOut.WaitOne();
mreErr.WaitOne();
return process.ExitCode;
}
}