        [DllImport("ntdll.dll", SetLastError = true)]
        internal static extern int NtQueryInformationProcess(IntPtr processHandle,
           int processInformationClass, int[] processInformation, uint processInformationLength,
           ref int returnLength);
           
private static void Anti-Debug2()
{
    if (Debugger.IsLogging())
    {
        MessageBox.Show("Debugger detected! Program will exit now!", "Debugger detected!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
        Environment.Exit(0);
    }
    if (Debugger.IsAttached)
    {
        MessageBox.Show("Debugger detected! Program will exit now!", "Debugger detected!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
        Environment.Exit(0);
    }
    if (Environment.GetEnvironmentVariable("complus_profapi_profilercompatibilitysetting") != null)
    {
        MessageBox.Show("Profiler detected! Program will exit now!", "Profiler detected!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
        Environment.Exit(0);
    }
    if (Environment.GetEnvironmentVariable("COR_ENABLE_PROFILING") == "1")
    {
        MessageBox.Show("Profiler detected! Program will exit now!", "Profiler detected!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
        Environment.Exit(0);
    }
    if (Environment.OSVersion.Platform == PlatformID.Win32NT)
    {
        int[] numArray = new int[6];
        int num = 0;
        IntPtr handle = Process.GetCurrentProcess().Handle;
        if ((NtQueryInformationProcess(handle, 0x1f, numArray, 4, ref num) == 0) && (numArray[0] != 1))
        {
            MessageBox.Show("Debugger detected! Program will exit now!", "Debugger detected!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            Environment.Exit(0);
        }
        if ((NtQueryInformationProcess(handle, 30, numArray, 4, ref num) == 0) && (numArray[0] != 0))
        {
            MessageBox.Show("Debugger detected! Program will exit now!", "Debugger detected!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
            Environment.Exit(0);
        }
    }
}

//plus

[DllImport("kernel32.dll", CharSet=CharSet.Auto)]
public static extern int GetModuleHandleW(string string_0);
 


private static void smethod_0()
{
    if (GetModuleHandleW("NET_Unpackme1.exe") == 0)
    {
        Environment.Exit(0);
    }
}

 

 
