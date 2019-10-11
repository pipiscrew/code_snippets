'Replace Special HTML Chars 
Sub CleanHTMLSpecialChars(inpt As String) As String 
	inpt = inpt.Replace("&quot;",QUOTE)
	inpt = inpt.Replace("&amp;","&")
	inpt = inpt.Replace("&lt;","<")
	inpt = inpt.Replace("&gt;",">")
	inpt = inpt.Replace("&#91;","[")
	inpt = inpt.Replace("&#93;","]")
	inpt = inpt.Replace("&euro;","€")
	
	Return inpt
End Sub 