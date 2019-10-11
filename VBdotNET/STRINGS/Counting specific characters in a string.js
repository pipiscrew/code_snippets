Dim aCount = MyString.Split("a").Length - 1

or REGEX


Dim checkString As String = "ThisXisXaXStringX"
Dim searchString As String = "X"

Dim regex As New Regex(searchString)
Dim numFound As Integer = regex.Matches(checkString).Count