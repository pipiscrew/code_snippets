Private Sub FindTarget(ls As ListView, txt As TextBox)
Dim i%

If Len(txt.Text) > 0 Then
    For i = 1 To ls.ListItems.Count
        If UCase(Mid(lstv.ListItems(i).Text, 1, Len(txt.Text))) = UCase(txt.Text) Then
            ls.ListItems(i).Selected = True
            ls.ListItems(i).EnsureVisible
            Exit For
        End If
    Next i
End If
End Sub


or


'Dim i%
'
'If Len(Text3) > 0 Then
'    For i = 1 To lstv.ListItems.Count
'        If UCase(Mid(lstv.ListItems(i).SubItems(2), 1, Len(Text3))) = UCase(Text3) Then
'            lstv.ListItems(i).Selected = True
'            lstv.ListItems(i).EnsureVisible
'            Exit For
'        End If
'    Next i
'End If

kai panta sta properties 
Hide Selection = FALSE!