//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/7123-regular-expressions-tutorial.html#post40844

Sub StrParse(FirstStr As String, sSeparator As String, idx As Int) As String
	Dim strArray() As String, l As List
	strArray = Regex.Split("[" & sSeparator & "\s]", FirstStr)
	l.Initialize2(strArray)
	Return l.Get(idx)
End Sub