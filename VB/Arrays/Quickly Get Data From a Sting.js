Dim a As String
Dim atmp() As String
a = "Text1;Text2;Text3;Text4"
atmp = Split(a, ";")
Test = a(3)

Now let's look at...

Dim a As String
a = "Text1;Text2;Text3;Text4"
Test = Split(a, ";")(3)

This way you can get the "Text4" string directly from split instead of mapping a temporary string (previous example).
It 's actually faster too ;)

Naturally, this also applies to tab delimited files. Example, Create a file in excel and export as TXT (Tab delimited)
You can get the cell from the respective row and column after reading contents to memory

Function CellData(data As String, row As Integer, column As Integer) As Variant
CellData = Split(Split(data, vbCrLf)(row), vbTab)(column)
End Function