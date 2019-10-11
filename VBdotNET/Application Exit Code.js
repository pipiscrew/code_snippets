'when use
Environment.Exit(<code>)

'where <code> is integer, application exits and return this code to primary prog


'http://msdn.microsoft.com/en-us/library/system.diagnostics.process.exitcode.aspx

Dim myProcess As Process = Nothing
myProcess = Process.Start("NotePad.exe")
Console.WriteLine("Process exit code: {0}", myProcess.ExitCode)
