Dim a$

a = Timer

'the code here 

MsgBox "Output file created" & vbCrLf & (Timer - a) / 100

----

t = Timer
    txtStart = DataControl1.FindText(txtFind, txtStart, txtField)
    lbStatus = "Time taken to search " & Timer - t & " Seconds"