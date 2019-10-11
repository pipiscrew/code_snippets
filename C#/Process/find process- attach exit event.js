//http://stackoverflow.com/questions/14709241/find-out-if-a-process-finished-running

var processes = Process.GetProcessesByName(processName);
foreach (var process in processes)
{
    Console.WriteLine("{0} running.", process);
    process.Exited += (sender, e) => Console.WriteLine("{0} exited.", sender);
    process.EnableRaisingEvents = true;
}