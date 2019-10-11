//create or append
public static string app_path;

internal static void log(string s)
{
    string t = DateTime.Now.ToString("yyyyMMdd HH:mm:ss") + " >> " + s;

    using (StreamWriter outfile = new StreamWriter(app_path + @"\log.txt", true))
    {
        outfile.WriteLine(t);
    }

}
        
        
//set it for log file
General.app_path = Application.StartupPath;
                
//use of 
 General.log("[start] app started + connected to dbase!");