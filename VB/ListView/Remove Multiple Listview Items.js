For i = j To 1 Step -1 
            If ListView.ListItems(i).Selected = True Then
                    ListView.ListItems.Remove (i)
            End If
Next i
