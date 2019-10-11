//https://github.com/ioncodes/CryptoScript/blob/master/CryptoScript/FileExtensionRegisterer/Program.cs

using Microsoft.Win32;
using System.Windows.Forms;

namespace FileExtensionRegisterer
{
    class Program
    {
        static void Main()
        {
            CreateFileAssociations();
        }

        static void CreateFileAssociations()
        {
            /***********************************/
            /**** Key1: Create ".cy" entry ****/
            /***********************************/
            Microsoft.Win32.RegistryKey key1 = Microsoft.Win32.Registry.CurrentUser.OpenSubKey("Software", true);

            key1.CreateSubKey("Classes");
            key1 = key1.OpenSubKey("Classes", true);

            key1.CreateSubKey(".cy");
            key1 = key1.OpenSubKey(".cy", true);
            key1.SetValue("", "CryptoScript"); // Set default key value

            key1.Close();

            /*******************************************************/
            /**** Key2: Create "DemoKeyValue\DefaultIcon" entry ****/
            /*******************************************************/
            Microsoft.Win32.RegistryKey key2 = Microsoft.Win32.Registry.CurrentUser.OpenSubKey("Software", true);

            key2.CreateSubKey("Classes");
            key2 = key2.OpenSubKey("Classes", true);

            key2.CreateSubKey("CryptoScript");
            key2 = key2.OpenSubKey("CryptoScript", true);

            key2.CreateSubKey("DefaultIcon");
            key2 = key2.OpenSubKey("DefaultIcon", true);
            key2.SetValue("", "\"" + @"c:\CryptoScript\icon.ico" + "\""); // Set default key value

            key2.Close();

            /**************************************************************/
            /**** Key3: Create "DemoKeyValue\shell\open\command" entry ****/
            /**************************************************************/
            Microsoft.Win32.RegistryKey key3 = Microsoft.Win32.Registry.CurrentUser.OpenSubKey("Software", true);

            key3.CreateSubKey("Classes");
            key3 = key3.OpenSubKey("Classes", true);

            key3.CreateSubKey("CryptoScript");
            key3 = key3.OpenSubKey("CryptoScript", true);

            key3.CreateSubKey("shell");
            key3 = key3.OpenSubKey("shell", true);

            key3.CreateSubKey("open");
            key3 = key3.OpenSubKey("open", true);

            key3.CreateSubKey("command");
            key3 = key3.OpenSubKey("command", true);
            key3.SetValue("", "\"" + @"C:\CryptoScript\CryptoScript.exe" + "\"" + " \"%1\""); // Set default key value

            key3.Close();
        }
    }
}