internal static class StringUtils
{
    // Methods
    public static string FromBase64(string text1)
    {
        if (text1 == null)
        {
            return null;
        }
        try
        {
            byte[] bytes = Convert.FromBase64String(text1);
            return Encoding.UTF8.GetString(bytes);
        }
        catch (FormatException)
        {
            return null;
        }
    }

    public static bool IsBase64OrXml(string text1)
    {
        if ((text1.Length % 4) != 0)
        {
            return false;
        }
        string input = text1;
        if (input.EndsWith("="))
        {
            input = text1.TrimEnd(new char[] { '=' });
        }
        if (input.Length == 0)
        {
            return false;
        }
        Regex regex = new Regex(string.Format("^([A-Za-z0-9+/]{{{0}}})$", input.Length), RegexOptions.CultureInvariant);
        return regex.IsMatch(input);
    }

    public static string ToBase64(string text1)
    {
        if (text1 == null)
        {
            return null;
        }
        return Convert.ToBase64String(Encoding.UTF8.GetBytes(text1));
    }
}

 
