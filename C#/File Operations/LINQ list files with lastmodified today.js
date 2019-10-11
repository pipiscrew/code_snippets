var directory = new DirectoryInfo(dFolder);
List<FileInfo> files = directory.GetFiles()
						.Where(file => file.LastWriteTime > DateTime.Today).ToList();

foreach (FileInfo item in files)
{
}