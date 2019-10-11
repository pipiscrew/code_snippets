//http://www.basic4ppc.com/forum/basic4android-updates-questions/18005-convert-these-commands-visual-basic-6-basic4android.html

Sub Process_Globals
Dim Conv As ByteConverter
.
.
End Sub

Function Hex2AsciiSocket(s_input As String)
.
.
For I = 1 To (s_input.length-1) Step 3
znak =Conv.HexToBytes(s_input.SubString2(I-1,I+1))
Out=Out & Conv.StringFromBytes(znak,"ASCII") 
Next 