//http://code.google.com/p/nando/source/browse/
/*
 * Utente: dariosky
 * Data: 24/08/2008
 * Ora: 16.01
 */
using System.Runtime.InteropServices;
using System;
using System.Drawing;
using System.IO;
using System.Collections.Generic;
using Microsoft.Win32;

namespace nando
{
    [StructLayout(LayoutKind.Sequential)]
    public struct SHFILEINFO
    {
        public IntPtr hIcon;
        public IntPtr iIcon;
        public uint dwAttributes;
        [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 260)]
        public string szDisplayName;
        [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 80)]
        public string szTypeName;
    };

    class Win32
    {
        private static System.Collections.Hashtable _iconCache = new System.Collections.Hashtable();

        private const uint SHGFI_ICON = 0x100;
        private const uint SHGFI_LARGEICON = 0x0; // 'Large icon
        private const uint SHGFI_SMALLICON = 0x1; // 'Small icon

        private const uint SHGFI_USEFILEATTRIBUTES = 0x10;	// read extension icon, not looking for existance of file
        private const uint FILE_ATTRIBUTE_DIRECTORY = 0x10;	// obtain generic directory icon
        private const uint FILE_ATTRIBUTE_NORMAL = 0x0;	// obtain file icon

        [DllImport("shell32.dll")]
        private static extern IntPtr SHGetFileInfo(string pszPath, uint dwFileAttributes, ref SHFILEINFO psfi, uint cbSizeFileInfo, uint uFlags);



        public static System.Drawing.Icon GetSmallFolderIcon()
        {
            string ext = "/";	// folder ext, used as key on iconCache
            return GetSmallAssociatedIcon(ext, FILE_ATTRIBUTE_DIRECTORY);
        }

        public static System.Drawing.Icon GetSmallAssociatedIcon(string filepath)
        {
            string ext = Path.GetExtension(filepath).ToLower();
            return GetSmallAssociatedIcon(ext, FILE_ATTRIBUTE_NORMAL);
        }

        public static System.Drawing.Icon GetSmallAssociatedIcon(string ext, uint type)
        {
            if (_iconCache.ContainsKey(ext)) return _iconCache[ext] as System.Drawing.Icon;

            SHFILEINFO shinfo = new SHFILEINFO();

            Win32.SHGetFileInfo(ext,
                                type, ref shinfo,
                                (uint)Marshal.SizeOf(shinfo),
                                Win32.SHGFI_ICON | Win32.SHGFI_SMALLICON | Win32.SHGFI_USEFILEATTRIBUTES
                               );
            System.Drawing.Icon myIcon = System.Drawing.Icon.FromHandle(shinfo.hIcon);

            _iconCache.Add(ext, myIcon);
            //System.Windows.Forms.MessageBox.Show("Prendo il valore per "+ext);
            return myIcon;
        }

        public static bool CheckExtensionAssociation(string ext, string programPath)
        // return true if ext is associated to programPath
        {
            RegistryKey fileExtension = Registry.CurrentUser.OpenSubKey(@"Software\Classes\.nnd");
            if (fileExtension == null) return false;
            string classType = (string)fileExtension.GetValue("");
            if (classType != "NandoFile") return false;
            RegistryKey nandoFileDescription = Registry.CurrentUser.OpenSubKey(@"Software\Classes\NandoFile\shell\open\command");
            string opener = (string)nandoFileDescription.GetValue("");
            if (!opener.StartsWith(string.Format("\"{0}\"",programPath))) return false;
            return true;
        }

        public static void AssociateFile(string ext, string programPath)
        {
            RegistryKey fileExtension = Registry.CurrentUser.CreateSubKey(@"Software\Classes\.nnd");
            fileExtension.SetValue("", "NandoFile", RegistryValueKind.String);
            RegistryKey nandoFileCommand = Registry.CurrentUser.CreateSubKey(@"Software\Classes\NandoFile\shell\open\command");
            nandoFileCommand.SetValue("", string.Format("\"{0}\" \"%1\" ", programPath), RegistryValueKind.String);
            Registry.CurrentUser.CreateSubKey(@"Software\Classes\NandoFile\DefaultIcon").SetValue("", string.Format("\"{0}\"", programPath), RegistryValueKind.String);
        }

        public static void DeassociateFile(string ext)
        {
            Registry.CurrentUser.DeleteSubKey(@"Software\Classes\.nnd");
            Registry.CurrentUser.DeleteSubKeyTree(@"Software\Classes\NandoFile");
        }
    }



}
