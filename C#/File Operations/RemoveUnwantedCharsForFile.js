        public static string RemoveUnwantedCharsForFile(string filename)
        {
            filename = filename.Replace(":", "");
            filename = filename.Replace("/", "");
            filename = filename.Replace("\\", "");
            filename = filename.Replace("<", "");
            filename = filename.Replace(">", "");
            filename = filename.Replace("|", "");
            filename = filename.Replace("?", "");
            filename = filename.Replace("*", "");
            filename = filename.Replace("\"", "");
            return filename.Trim();
        }

#extra:
            filename = filename.Replace("®", "");
            filename = filename.Replace("™", "");
            filename = filename.Replace("+", "");
            filename = filename.Replace("!", "");
            filename = filename.Replace("&", ""); 
            filename = filename.Replace(",", "");
            filename = filename.Replace("'", "");
            
            
            
            
public static string MakeSafeFilename(string filename)
{
    foreach (char ch in Path.GetInvalidFileNameChars())
    {
        filename = filename.Replace(ch, '_');
    }
    return filename;
}


//optimized with regEX
public static string MakeSafeFilename(string filename)
{
    Regex pattern = new Regex("[" + string.Join(",", Path.GetInvalidFileNameChars()) + "]");

    return pattern.Replace(filename, "_");
}

