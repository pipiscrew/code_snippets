
Dim buffer As String

Open "d:\Unicode.txt" For Binary As #1

buffer = StrConv(Text.Text, vbUnicode) + StrConv(vbCrLf, vbUnicode)

Put #1, , buffer

Close #1


'[ANDROID/General] - sto read prepei na einai UTF-16Little Endian
'source:  http://accessblog.net/2007/06/how-to-write-out-unicode-text-files-in.html