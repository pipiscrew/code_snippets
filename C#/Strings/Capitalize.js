        public string Titlecase(string text)
        {
            return CultureInfo.InvariantCulture.TextInfo.ToTitleCase(text.ToLowerInvariant());
        }
        

//http://www.dotnetperls.com/regex-replace
public static class TextTools
{
    /// <summary>
    /// Uppercase first letters of all words in the string.
    /// </summary>
    public static string UpperFirst(string s)
    {
	return Regex.Replace(s, @"\b[a-z]\w+", delegate(Match match)
	{
	    string v = match.ToString();
	    return char.ToUpper(v[0]) + v.Substring(1);
	});
    }
}

//http://www.dotnetperls.com/uppercase-first-letter

        private static string UppercaseFirst(string s)
        {
            // Check for empty string.
            if (string.IsNullOrEmpty(s))
            {
                return string.Empty;
            }
            // Return char and concat substring.
            return char.ToUpper(s[0]) + s.Substring(1);
        }
        
        //capitalize sentence
        private string capitalize(string s)
        {
            string[] arr = s.Split(char.Parse(" "));
            string output = "";
            for (int i = 0; i < arr.Length; i++)
            {
                if (arr[i].Length > 1)
                    output += arr[i].Substring(0, 1).ToUpper() + arr[i].Substring(1).ToLower() + " ";
                //else //only when starts/ends with ' '
                //  output += " ";
            }

            return output.Trim();
        }