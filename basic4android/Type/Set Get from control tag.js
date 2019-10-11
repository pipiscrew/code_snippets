Type RowCol (Row As Int, Col As Int)

'set
Dim rc As RowCol
rc.Initialize
rc.Col = i
rc.Row = NumberOfRows



'retrieve
Dim rc As RowCol
Dim txt As Label
txt = Sender
rc = txt.Tag
msgbox (rc.Col & rc.Row,"test")