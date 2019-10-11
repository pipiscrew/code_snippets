Dim k As Integer
Dim itmx As ListItem
Set itmx = lstV.ListItems(1)
   
   For k = 2 To 3
      itmx.ListSubItems(k).ForeColor = vbBlue
   Next

    Set itmx = Nothing
    
    lstV.Refresh



or for BOLD
ListView1.ListItems(i).ListSubItems(1).Bold = True 
ListView1.ListItems(i).ListSubItems(1).Bold = false 

