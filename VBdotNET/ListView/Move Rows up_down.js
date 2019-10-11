
    Private Sub MoveListViewItem(ByRef lv As ListView, ByVal moveUp As Boolean)
        Try
            Dim i As Integer
            Dim cache As String
            Dim selIdx As Integer

            lstv.MultiSelect = False
            With lv
                selIdx = .SelectedItems.Item(0).Index
                If moveUp Then
                    ' ignore moveup of row(0)
                    If selIdx = 0 Then
                        Exit Sub
                    End If
                    ' move the subitems for the previous row
                    ' to cache so we can move the selected row up
                    For i = 0 To lv.Items(selIdx).SubItems.Count - 1
                        cache = .Items(selIdx - 1).SubItems(i).Text
                        .Items(selIdx - 1).SubItems(i).Text = _
                           .Items(selIdx).SubItems(i).Text
                        .Items(selIdx).SubItems(i).Text = cache
                    Next
                    .Items(selIdx - 1).Selected = True
                    .Items(selIdx - 1).EnsureVisible()
                    .Refresh()
                    .Focus()
                Else
                    ' ignore move down of last row
                    If selIdx = .Items.Count - 1 Then
                        Exit Sub
                    End If
                    ' move the subitems for the next row
                    ' to cache so we can move the selected row down
                    For i = 0 To lv.Items(selIdx).SubItems.Count - 1
                        cache = .Items(selIdx + 1).SubItems(i).Text
                        .Items(selIdx + 1).SubItems(i).Text = _
                           .Items(selIdx).SubItems(i).Text
                        .Items(selIdx).SubItems(i).Text = cache
                    Next
                    .Items(selIdx + 1).Selected = True
                    .Items(selIdx + 1).EnsureVisible()
                    .Refresh()
                    .Focus()
                End If
            End With
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        Finally
            lstv.MultiSelect = True
        End Try
    End Sub

    Private Sub lstvBARmoveUP_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles lstvBARmoveUP.Click
        If lstv.SelectedIndices.Count = 0 Then Exit Sub
        MoveListViewItem(lstv, True)
    End Sub

    Private Sub lstvBARmoveDOWN_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles lstvBARmoveDOWN.Click
        If lstv.SelectedIndices.Count = 0 Then Exit Sub
        MoveListViewItem(lstv, False)
    End Sub