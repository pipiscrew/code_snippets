private void appShortcutToDesktop(string shortcutPath)
{
    using (StreamWriter writer = new StreamWriter(Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory) + @"\" + shortcutPath + ".url"))
    {
        string location = Assembly.GetExecutingAssembly().Location;
        writer.WriteLine("[InternetShortcut]");
        writer.WriteLine("URL=file:///" + location);
        writer.WriteLine("IconIndex=0");
        writer.WriteLine("IconFile=" + location.Replace('\\', '/'));
        writer.Flush();
    }
}

 
