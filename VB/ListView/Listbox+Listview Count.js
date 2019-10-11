'ListBox
For i = 0 To List1.ListCount - 1
  If List1.Selected(i) = True Then EpibarCount = EpibarCount + 1
Next i

'Listview
For i = 1 To lstv.ListItems.Count
  If lstv.ListItems(i).Checked = True Then ParathrCount = ParathrCount + 1
Next i