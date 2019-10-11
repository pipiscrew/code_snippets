//http://stackoverflow.com/q/28768410/1320686
//todo 
//device["Manufacturer"].ToString().toLower;
//add parallels
//add vbox
//add qbox
//http://securityresearch.in/index.php/announce/virtualmachinedetect-v-2-1-1-beta-is-out/ or https://bitbucket.org/anjanavk/vmresearch/src


/// <summary>
/// Detect the Virtual Machine the software is running on
/// </summary>
/// <returns>the detected Virtual Machine.</returns>
private static string GetVirtualMachine()
{
    try
    {
        using (var deviceSet = new ManagementObjectSearcher("SELECT * FROM Win32_ComputerSystem"))
        {
            foreach (var device in deviceSet.Get())
            {
                strResult = device["Manufacturer"].ToString();

                if (strResult.IndexOf("VMware", 0) != -1)
                    return "VMWare Workstation";
                else if (strResult.IndexOf("Virual PC") != -1)
                    return "Microsoft Virtual PC";
                else if (System.Windows.Forms.SystemInformation.TerminalServerSession)
                    return "Windows Terminal Server";
            }
            return "Unknown Virtual Machine";
        }
    }
    catch (Exception)
    {
        return "Unknown Virtual Machine";
    }
}