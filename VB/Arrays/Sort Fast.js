Private Sub ShellOrder(sort$(), numofElements As Long)
Dim span%, j%, i%, temp$

span% = numofElements \ 2
Do While span > 0
    For i% = span To numofElements - 1
      j% = i% - span + 1
      For j% = (i% - span + 1) To 1 Step -span
        If sort$(j%) <= sort$(j% + span%) Then Exit For
        'Organize the elements that are out of order
        temp$ = sort$(j%)
        sort$(j%) = sort$(j% + span%)
        sort$(j% + span%) = temp$
      Next j%
    Next i%
    
    span% = span% \ 2
Loop
End Sub