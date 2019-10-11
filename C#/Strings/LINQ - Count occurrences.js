//http://stackoverflow.com/a/6625833
private static int get_occurrences(string fileName)
{
    string[] file_exported = File.ReadAllLines(fileName);
    return file_exported.Where(s => s.Contains("</root>")).Count();
}