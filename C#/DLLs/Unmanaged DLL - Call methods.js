//http://csharper.fairblog.ro/2011/02/dynamically-invoking-functions-from-unmanaged-dlls-in-c

        [DllImport("kernel32.dll", CharSet = CharSet.Ansi, ExactSpelling = true, SetLastError = true)]
        private static extern IntPtr GetProcAddress(IntPtr hModule, string lpProcName);
 
        [DllImport("kernel32.dll", SetLastError = true)]
        private static extern IntPtr LoadLibrary(string lpFileName);
 
        [DllImport("kernel32.dll", SetLastError = true)]
        private static extern bool FreeLibrary(IntPtr hModule);
 
        private delegate UInt32 PointerForMyMethod(UInt32 parameter1, string parameter2);
 
        public static UInt32 CallMethod(string dll, string methodName, UInt32 parameter1, string parameter2)
        {
            IntPtr hLib = IntPtr.Zero;
            UInt32 result=0;
            try
            {
                hLib = LoadDll(dll);
                result = CallPointerMethod(hLib, methodName, parameter1, parameter2);
                FreeDll(hLib);
            }
            catch (Exception exc)
            {
                if (hLib != IntPtr.Zero) FreeDll(hLib);
                throw exc;
            }
            return result;
        }
 
        private static IntPtr LoadDll(string dll)
        {
            IntPtr hLib = LoadLibrary(dll);
            if (IntPtr.Zero == hLib) throw new Win32Exception(Marshal.GetLastWin32Error());
            return hLib;
        }
 
        private static UInt32 CallPointerMethod(IntPtr hLib, string methodName, UInt32 parameter1, string parameter2)
        {
            IntPtr dllEntryPoint = GetProcAddress(hLib, methodName);
            if (dllEntryPoint == IntPtr.Zero) throw new Win32Exception(Marshal.GetLastWin32Error());
            PointerForMyMethod functionDelegate = (PointerForMyMethod)Marshal.GetDelegateForFunctionPointer(dllEntryPoint, typeof(PointerForMyMethod));
            UInt32 result = functionDelegate(parameter1, parameter2);
            return result;
        }
 
        private static void FreeDll(IntPtr hLib)
        {
            if (!FreeLibrary(hLib)) throw new Win32Exception(Marshal.GetLastWin32Error());
        }
        
        
Now you can call that method using:
        UInt32 parameter1;
        string parameter2;
        UInt32 result; 
 
        //set parameters & invoke the method
        parameter1 = 1;
        parameter2 = "bla bla";
        result = CallMethod("MySample.dll", "MyMethod", parameter1, parameter2);