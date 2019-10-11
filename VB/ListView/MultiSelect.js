If lstV.SelectedItem Is Nothing Then Exit Sub
Dim iDs$
   For i = 1 To lstV.ListItems.Count
      If lstV.ListItems(i).Selected = True Then
        iDs = iDs & Mid(lstV.ListItems(i).Key, 2) & ","
      End If
   Next i
   
   MsgBox Mid(iDs, 1, Len(iDs) - 1)