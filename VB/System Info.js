Private Sub Command1_Click()
Dim EnvString, Indx
Indx = 1   ' Initialize index to 1.
Do
   EnvString = Environ(Indx)   ' Get environment
MsgBox Indx & ": " & EnvString
Indx = Indx + 1
Loop Until Indx = 30

End Sub
