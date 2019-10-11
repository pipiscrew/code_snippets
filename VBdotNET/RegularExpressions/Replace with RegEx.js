        Dim userName As String = "Nei.m.ke dvdRip [Darren]xvId Neimke (Darren)-jdsafoasdfsda" & vbCrLf & "sdfkajsfkdajsf-dsfsd"
        Dim re As Regex

'Remove complete any character inside () and parethensis
        re = New Regex("\(.*?\)")
        userName = re.Replace(userName, "")

'Remove complete any character inside [] and parethensis
        re = New Regex("\[.*?\]")
        userName = re.Replace(userName, "")

'Remove .
        re = New Regex("\.")
        userName = re.Replace(userName, " ")

'Remove dvdrip word and IgnoreCase
        re = New Regex("dvdrip", RegexOptions.IgnoreCase)
        userName = re.Replace(userName, "")

'Remove - and any other string until the end of current line
        re = New Regex("-.*$", RegexOptions.IgnoreCase)
        userName = re.Replace(userName, "")
        
        
        
various :
(?m)        This is an option directive that indicates a multi-line string. This makes the ^ and $ characters match the beginning and end of a line rather than the beginning and end of the string.
^        Match the beginning of a line.
([^,]*)        Match any character other than comma any number of times. This part is enclosed in parentheses so it forms the first match group.
,         Match a comma followed by a space.
(.*)        Match any character any number of times. This part is enclosed in parentheses so it forms the second match group.
$        Match the end of the line.