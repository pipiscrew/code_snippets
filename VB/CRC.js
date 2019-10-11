Private Sub CheckSum(NAMBMP$, outcheck)
 On Error GoTo ERC
 fil$ = NAMBMP$
 FF = FreeFile
 x$ = " "
 CSUM = 0
 Open fil$ For Binary As #FF
 For i = 1 To LOF(FF) Step LOF(FF) / 2000
  Get #FF, i, x$
  CSUM = CSUM + Asc(x$)
 Next i
 Close #FF
 outcheck = CSUM
 Exit Sub

ERC:
 outcheck = 0

End Sub