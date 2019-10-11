'
'source http://www.ondotnet.com/pub/a/dotnet/2001/07/30/vb7.html?page=2
'


Left$ function is replaced by the Substring method:

Dim s As String
s = Left$("Hello World", 5)  ' returns "Hello"

is equivalent to

Dim s As String
s = "Hello World".Substring(0, 5)  ' returns "Hello"




Right$ function is also replaced by the Substring method:

Dim s As String
s = Right$(Hello World", 5)  ' returns "World"

is equivalent to the following VB7 code:

Dim s As String, s1 As String
s = "Hello World"
s1 = s.Substring(s.Length - 5)  ' returns "World"

From the two examples, the Mid$ can easily be replaced by the Substring method as well



String comparison
You can still use the string manipulation functions:

If s1 = s2 Then

which is the same as writing the following:
If s1.Equals(s2) Then