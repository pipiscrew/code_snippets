Private Function IsValidFileName(ByVal fn As String) As Boolean
Const VALIDFILECHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_^$~!#%&-{}()@'`???????:\."
Dim i As Integer
If Len(fn) Then
     IsValidFileName = True
     For i = 1 To Len(fn)
          If instr(VALIDFILECHARS,mid$(fn,i,1))=0 Then
               IsValidFileName = False
               Exit For
          End If
     Next i
End If
End Function
