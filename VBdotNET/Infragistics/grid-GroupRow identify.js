    Private Sub TAB6GridPropertyAnnouncements_DoubleClickRow(ByVal sender As Object, ByVal e As Infragistics.Win.UltraWinGrid.DoubleClickRowEventArgs) Handles TAB6GridPropertyAnnouncements.DoubleClickRow
        If e.RowArea = Infragistics.Win.UltraWinGrid.RowArea.GroupByRowArea Then Exit Sub 'AMA EINAI GROUPROW 
        If TAB6GridPropertyAnnouncements.ActiveRow Is Nothing Then Exit Sub

    End Sub