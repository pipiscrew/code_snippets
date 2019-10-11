Private Sub FillCombos()
Dim rss As ADODB.Recordset
Dim i%

Set rss = GetRecordSet("Select ID,'vol-' & Name & ' [' & CRdate & ']' from Volumes order by name")
Combo1.AddItem "All", 0

i = 1
Do Until rss.EOF
    Combo1.AddItem rss(1), i
    Combo1.ItemData(i) = rss(0)
    i = i + 1: rss.MoveNext
Loop

Set rss = Nothing
Combo1.ListIndex = 0
End Sub