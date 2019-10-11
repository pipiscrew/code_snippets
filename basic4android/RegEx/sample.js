If you don't like XML parsing than you could do it using this regex pattern: <rep\sname=\x22(.*?)\x22

Note: the \x22 is used instead of " because of the string that needs to get supplied in basic. 

Dim match As Matcher
Dim str As String	
match = Regex.Matcher("<rep\sname=\x22(.*?)\x22", xmlstr)
Do While match.Find
str = match.Group(1)
If str <> "" Then
' Do something with the name here
End If
Loop

I don't know what is easier but sometimes XML gets a little tough when multiple nested nodes.