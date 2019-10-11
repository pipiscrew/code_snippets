row color = Default Cell Style to SelectionBackColor

*Get Cell Text
Grid1.SelectedRows(0).Cells(5).Value

*Hide Column
Grid1.Columns(0).Visible = False

*Found new/updated row
            For i = 0 To Grid1.Rows.Count - 1
                If Grid1.Rows(i).Cells(0).Value = res Then
                    Grid1.Rows(i).Selected = True
                    Grid1.FirstDisplayedScrollingRowIndex = i 'ensure visible
                    Exit For
                End If
            Next

*SORT
Grid1.Columns(1).SortMode = DataGridViewColumnSortMode.Automatic