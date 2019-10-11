    Private Sub lstv_ColumnClick(ByVal sender As Object, ByVal e As System.Windows.Forms.ColumnClickEventArgs) Handles lstv.ColumnClick
        If lstv.Sorting = SortOrder.Descending Then
            lstv.Sorting = SortOrder.Ascending
        Else
            lstv.Sorting = SortOrder.Descending
        End If
    End Sub