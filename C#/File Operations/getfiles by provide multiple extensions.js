//http://stackoverflow.com/a/163220/1320686

Directory.GetFiles("C:\\path", "*.mp3", SearchOption.AllDirectories);

var files = Directory.EnumerateFiles("C:\\path", "*.*", SearchOption.AllDirectories)
            .Where(s => s.EndsWith(".mp3") || s.EndsWith(".jpg"));
            
            
///////////get by modified day, get today files.

           var directory = new DirectoryInfo(dest_dir);
           List<FileInfo> files = directory.GetFiles()
                                    .Where(file => file.LastWriteTime > DateTime.Today).ToList();
                                            
///////////get by mutliple filename wildcards.

//single mask - files = General.GetFiles(dest_dir, "*" + DateTime.Today.AddDays(-1).ToString("yyyyMMdd") + "*.dat", SearchOption.TopDirectoryOnly);
//multiple - files = GetFiles(des_dir, "*" + DateTime.Today.AddDays(-1).ToString("yyyyMMdd") + "*.dat|" + "*" + DateTime.Today.AddDays(-2).ToString("yyyyMMdd") + "*.dat|" + "*" + DateTime.Today.AddDays(-3).ToString("yyyyMMdd") + "*.dat", SearchOption.TopDirectoryOnly);

internal static string[] GetFiles(string sourceFolder, string filters, System.IO.SearchOption searchOption)
{
    return filters.Split('|').SelectMany(filter => System.IO.Directory.GetFiles(sourceFolder, filter, searchOption)).ToArray();
}