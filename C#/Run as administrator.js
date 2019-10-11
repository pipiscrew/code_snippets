//check if admin, if not run as admin :
WindowsIdentity windowsIdentity = WindowsIdentity.GetCurrent();
WindowsPrincipal windowsPrincipal = new WindowsPrincipal(windowsIdentity);
if (!windowsPrincipal.IsInRole(WindowsBuiltInRole.Administrator))
{
    if (MessageBox.Show(Resource1.adminQuestion, Text, MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes)
    {
        ProcessStartInfo startInfo = new ProcessStartInfo();
        startInfo.UseShellExecute = true;
        startInfo.WorkingDirectory = Environment.CurrentDirectory;
        startInfo.FileName = Application.ExecutablePath;
        startInfo.Verb = "runas";
        Process.Start(startInfo);
        this.Close();
        Application.Exit();
    }
}

//http://www.pipiscrew.com/2017/02/run-as-administrator/

//solutionB with manifest
//https://stackoverflow.com/questions/2818179/how-do-i-force-my-net-application-to-run-as-administrator

//start 3rd app with admin rights
//https://stackoverflow.com/questions/2532769/how-to-start-a-process-as-administrator-mode-in-c-sharp


//OOShutUp10
public static void StartApp(bool runAsAdmin, string[] args)
{
    ProcessStartInfo startInfo = new ProcessStartInfo {
        UseShellExecute = true,
        WorkingDirectory = Environment.CurrentDirectory,
        FileName = ExecutablePath
    };
    foreach (string str in args)
    {
        startInfo.Arguments = startInfo.Arguments + str + " ";
    }
    if (runAsAdmin)
    {
        startInfo.Verb = "runas";
    }
    try
    {
        Process.Start(startInfo);
    }
    catch
    {
        return;
    }
    Application.Current.Shutdown();
}