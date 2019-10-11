//OOSU10
        internal class NativeMethods
        {

            [DllImport("kernel32.dll", ExactSpelling = true)]
            internal static extern IntPtr GetCurrentProcess();


            [DllImport("advapi32.dll", SetLastError = true, ExactSpelling = true)]
            internal static extern bool OpenProcessToken(IntPtr h, int acc, ref IntPtr phtok);



            [DllImport("advapi32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
            internal static extern bool LookupPrivilegeValue(string host, string name, ref long pluid);



            [DllImport("advapi32.dll", SetLastError = true, ExactSpelling = true)]
            internal static extern bool AdjustTokenPrivileges(IntPtr htok, bool disall, ref TokPriv1Luid newst, int len, IntPtr prev, IntPtr relen);



            [DllImport("user32.dll", SetLastError = true, ExactSpelling = true)]
            internal static extern bool ExitWindowsEx(int flg, int rea);
 

            internal struct TokPriv1Luid
            {
                public int Count;
                public long Luid;
                public int Attr;
            }

        }

        private static void DoExitWin(int flg)
        {
            NativeMethods.TokPriv1Luid luid;
            IntPtr currentProcess = NativeMethods.GetCurrentProcess();
            IntPtr zero = IntPtr.Zero;
            NativeMethods.OpenProcessToken(currentProcess, 40, ref zero);
            luid.Count = 1;
            luid.Luid = 0;
            luid.Attr = 2;
            NativeMethods.LookupPrivilegeValue(null, "SeShutdownPrivilege", ref luid.Luid);
            NativeMethods.AdjustTokenPrivileges(zero, false, ref luid, 0, IntPtr.Zero, IntPtr.Zero);
            NativeMethods.ExitWindowsEx(flg, 0);
        }

        public static void Reboot()
        {
            DoExitWin(2);
        }

        public static void Shutdown()
        {
            DoExitWin(1);
        }
