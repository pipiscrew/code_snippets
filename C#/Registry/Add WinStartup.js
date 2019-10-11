public static class WinStartUp
{
    // Methods
    public static void Delete(string ProgramName, bool AllUsers)
    {
        if (Get(ProgramName, AllUsers) != null)
        {
            RegistryKey localMachine;
            string name = @"Software\Microsoft\Windows\CurrentVersion\Run";
            if (AllUsers)
            {
                localMachine = Registry.LocalMachine;
            }
            else
            {
                localMachine = Registry.CurrentUser;
            }
            localMachine = localMachine.OpenSubKey(name, true);
            if (localMachine != null)
            {
                try
                {
                    localMachine.DeleteValue(ProgramName);
                }
                finally
                {
                    localMachine.Close();
                }
            }
        }
    }

    public static string Get(string ProgramName, bool AllUsers)
    {
        string str;
        if (AllUsers)
        {
            str = "HKEY_LOCAL_MACHINE";
        }
        else
        {
            str = "HKEY_CURRENT_USER";
        }
        return (string) Registry.GetValue(str + @"\Software\Microsoft\Windows\CurrentVersion\Run", ProgramName, null);
    }

    public static void Set(string ProgramName, string CommandLine, bool AllUsers)
    {
        string str;
        if (AllUsers)
        {
            str = "HKEY_LOCAL_MACHINE";
        }
        else
        {
            str = "HKEY_CURRENT_USER";
        }
        Registry.SetValue(str + @"\Software\Microsoft\Windows\CurrentVersion\Run", ProgramName, CommandLine);
    }
}

 
