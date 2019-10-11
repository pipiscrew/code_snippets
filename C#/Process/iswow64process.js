//http://www.pinvoke.net/default.aspx/kernel32.iswow64process

//cant assign to variable?
//using System.Linq;
Process[] processlist = Process.GetProcesses();

var f processlist.ToList().ForEach(p => p.Modules.Cast<ProcessModule>().FirstOrDefault(m => m.ModuleName == "Scyla.dll"));

//https://stackoverflow.com/a/4292453/1320686
//cant see the kill
Process.GetProcesses().Where(p=>p.ProcessName==whatever).ToList().ForEach(y => y.Kill);

//quick way to kill
foreach (Process process in Process.GetProcessByName("communicator"))
{
    process.Kill();
}

//https://stackoverflow.com/a/17413251/1320686
public static IntPtr GetModuleBaseAddress(Process x,string moduleName)
{
    var module =  x.Modules.Cast<ProcessModule>().FirstOrDefault(m => m.ModuleName == moduleName);

    return module != null ? module.BaseAddress : IntPtr.Zero;
}


//https://stackoverflow.com/a/36431341/1320686
Process[] processlist = Process.GetProcesses();

foreach(Process theprocess in processlist){
	Console.WriteLine(“Process: {0} ID: {1}”, theprocess.ProcessName, theprocess.Id);
	
	foreach (var module in theprocess.Modules)
	{
	   Console.WriteLine(string.Format("Module: {0}", module.FileName));
	}
}