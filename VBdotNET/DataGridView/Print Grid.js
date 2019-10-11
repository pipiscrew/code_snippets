How to call :

Dim prnt As Grid2Printer = Nothing
If IsNothing(prnt) Then
prnt = New Grid2Printer(DataGridView1, apTitle, UserName) 'DataGridView, Wiindow Title (as the Page Header), Username
End If
prnt.Print() or prnt.ShowPrintPreviewDialog()


source :
http://forums.microsoft.com/msdn/showpost.aspx?postid=4079676&siteid=1&mode=1&sb=0&d=1&at=7&ft=11&tf=0&pageid=2
