//http://www.dotnetperls.com/convert-string-array-string

    static string ConvertStringArrayToString(string[] array)
    {
	//
	// Concatenate all the elements into a StringBuilder.
	//
	StringBuilder builder = new StringBuilder();
	foreach (string value in array)
	{
	    builder.Append(value);
	    builder.Append('.');
	}
	return builder.ToString();
    }

    static string ConvertStringArrayToStringJoin(string[] array)
    {
	//
	// Use string Join to concatenate the string elements.
	//
	string result = string.Join(".", array);
	return result;
    }