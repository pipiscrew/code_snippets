//http://stackoverflow.com/q/162727
const string REGEX_LOT = "^(?<Field1>.{28})" +
            "(?<Field2>.{56})" +
            "(?<Field3>.{14})" +
            "(?<Field4>.{140})";

Regex reLot = new Regex(REGEX_LOT, RegexOptions.Compiled);

using (StreamReader reader = new StreamReader(@"C:\s.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null)
    {
        Match match = reLot.Match(line);
        string field4 = match.Groups["Field4"].Value;
        Console.WriteLine(field4);
    }
}