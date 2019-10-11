public static bool IsAnAdministrator()
{
    WindowsIdentity current = WindowsIdentity.GetCurrent();
    if (current == null)
    {
        return false;
    }
    WindowsPrincipal principal = new WindowsPrincipal(current);
    return principal.IsInRole(WindowsBuiltInRole.Administrator);
}


//https://github.com/EslaMx7/PasteIntoFiles
public static void RestartApp()
{
    ProcessStartInfo proc = new ProcessStartInfo();
    proc.UseShellExecute = true;
    proc.WorkingDirectory = Environment.CurrentDirectory;
    proc.FileName = Application.ExecutablePath;
    proc.Verb = "runas";

    try
    {
        Process.Start(proc);
    }
    catch
    {
        // The user refused the elevation.
        // Do nothing and return directly ...
        return;
    }
    Application.Exit();
}