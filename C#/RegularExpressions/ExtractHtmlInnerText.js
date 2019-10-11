//http://www.codeproject.com/Tips/477066/Extract-inner-text-from-Html-using-Regex

public static string ExtractHtmlInnerText(string htmlText)
{
    //Match any Html tag (opening or closing tags) 
    // followed by any successive whitespaces
    //consider the Html text as a single line

    Regex regex = new Regex("(<.*?>\\s*)+", RegexOptions.Singleline);
    
    // replace all html tags (and consequtive whitespaces) by spaces
    // trim the first and last space

    string resultText = regex.Replace(htmlText, " ").Trim();

    return resultText;
}