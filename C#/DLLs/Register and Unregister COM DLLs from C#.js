//http://csharper.fairblog.ro/2011/02/register-and-unregister-com-dlls-from-c
The simplest way to do this is to call regsvr32.exe with a code like this:
        Process proc = new Process();
        proc.StartInfo.FileName = "regsvr32.exe";
        //comDll contains the full path of the COM DLL 
        //If the COM DLL is in the application folder, in the system folder of
        //in a folder in the PATH variable of the system, then comDLL can
        //be only the file name.
        proc.StartInfo.Arguments = comDll;
        proc.StartInfo.UseShellExecute = false;
        proc.StartInfo.CreateNoWindow = true;
        proc.StartInfo.RedirectStandardOutput = true;
        proc.Start();
        proc.WaitForExit();
        proc.Close();
        
        
--

As regsvr32.exe interenally uses DllRegisterServer and DllUnregisterServer, we can use the same WinAPI functions to register that COM.
DllRegisterServer and DllUnregisterServer are two functions that are present in each COM DLL. Depending on the compiler used to generate that DLL, the functions are coded by the developer or added automatically by the compiler, but the important thing is: these functions are always there (or the DLL is not a COM DLL).
So, in order to register/unregister a COM DLL we have to:
load that DLL into memory
get a pointer to the function DllRegisterServer or DllUnregisterServer respectively
invoke that function
unload the DLL from memory
    using System.Runtime.InteropServices;    //Required for DllImport, IntPtr ...
    using System.ComponentModel;             //Required for Win32Exception
    public class ComRegistar
    {
 
        [DllImport("kernel32.dll", CharSet = CharSet.Ansi, ExactSpelling = true, SetLastError = true)]
        private static extern IntPtr GetProcAddress(IntPtr hModule, string lpProcName);
 
        [DllImport("kernel32.dll", SetLastError = true)]
        private static extern IntPtr LoadLibrary(string lpFileName);
 
        [DllImport("kernel32.dll", SetLastError = true)]
        private static extern bool FreeLibrary(IntPtr hModule);
 
        private delegate UInt32 PointerToMethod();
 
        public static void RegisterCom(string comDll) 
        {
            IntPtr hLib=IntPtr.Zero;
            try
            {
                hLib = LoadComDll(comDll);
                CallPointerMethod(hLib, "DllRegisterServer");
                FreeComDll(hLib);
            }
            catch (Exception exc)
            {
                if (hLib != IntPtr.Zero) FreeComDll(hLib);
                throw exc;
            }
        }
        public static void UnregisterCom(string comDll)
        {
            IntPtr hLib = IntPtr.Zero;
            try
            {
                hLib = LoadComDll(comDll);
                CallPointerMethod(hLib, "DllUnregisterServer");
                FreeComDll(hLib);
            }
            catch (Exception exc)
            {
                if (hLib != IntPtr.Zero) FreeComDll(hLib);
                throw exc;
            }
        }
 
        private static IntPtr LoadComDll(string comDll)
        {
            IntPtr hLib = LoadLibrary(comDll);
            if (IntPtr.Zero == hLib) throw new Win32Exception(Marshal.GetLastWin32Error());
            return hLib;
 
        }
        private static void CallPointerMethod(IntPtr hLib, string methodName)
        {
            IntPtr dllEntryPoint = GetProcAddress(hLib, methodName);
            if (dllEntryPoint==IntPtr.Zero) throw new Win32Exception(Marshal.GetLastWin32Error());
            PointerToMethod functionDelegate = (PointerToMethod)Marshal.GetDelegateForFunctionPointer(dllEntryPoint, typeof(PointerToMethod));
            UInt32 result = functionDelegate();
            if (result != 0) throw new Win32Exception(Marshal.GetLastWin32Error());
        }
        private static void FreeComDll(IntPtr hLib)
        {
            if (!FreeLibrary(hLib)) throw new Win32Exception(Marshal.GetLastWin32Error());
        }
 
    }
Now we can use it by simply calling:
            ComRegistar.RegisterCom(dll);
or
            ComRegistar.UnregisterCom(dll);
E.g.:
        //The command line arguments for this application are:
        //* the fileName (eventually including the path)
        //* "/u" flag (optional) specifying that the dll must be unregistered.
        //So:
        // "MySample.dll" registers
        // "/u MySample.dll" or "MySample.dll /u" unregisters
        static void Main(string[] args)
        {
            bool uninstall = false;
            string comDll=string.Empty;
            foreach (string arg in args)
            {
                if (arg.ToLowerInvariant() == "/u") 
                    uninstall = true;
                else
                    comDll=arg;
            }
            //comDll contains the full path of the COM DLL 
            //If the COM DLL is in the application folder, in the system folder of
            //in a folder in the PATH variable of the system, then comDLL can
            //be only the file name.
            if (uninstall)
                ComRegistar.UnregisterCom(comDll);
            else
                ComRegistar.RegisterCom(comDll);
        }