https://www.codeproject.com/Articles/528178/Load-DLL-From-Embedded-Resource

The DLLs are not distributed with the application, when the application fails to locate the DLL, it raises an Event of  AppDomain.CurrentDomain.AssemblyResolve. AssemblyResolve is requesting the missing DLL. Then, we will tell our application to look for the DLL in memory. 

AppDomain.CurrentDomain.AssemblyResolve += new ResolveEventHandler(CurrentDomain_AssemblyResolve);