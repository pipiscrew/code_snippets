//OOShutUp10
    public static bool IsWindows10
    {
        get
        {
            try
            {
                int num = (int) OORegistry.Read(Registry.LocalMachine, @"SOFTWARE\Microsoft\Windows NT\CurrentVersion", "CurrentMajorVersionNumber");
                int num2 = (int) OORegistry.Read(Registry.LocalMachine, @"SOFTWARE\Microsoft\Windows NT\CurrentVersion", "CurrentMinorVersionNumber");
                return ((num == 10) && (num2 == 0));
            }
            catch
            {
                int major = Environment.OSVersion.Version.Major;
                int minor = Environment.OSVersion.Version.Minor;
                return ((major == 10) && (minor == 0));
            }
        }
    }

