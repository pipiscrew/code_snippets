    Private Sub TAB6GridPropertyAnnouncements_DoubleClickRow(ByVal sender As Object, ByVal e As Infragistics.Win.UltraWinGrid.DoubleClickRowEventArgs) Handles TAB6GridPropertyAnnouncements.DoubleClickRow
        If e.RowArea = Infragistics.Win.UltraWinGrid.RowArea.GroupByRowArea Then Exit Sub 'AMA EINAI GROUPROW 
        If TAB6GridPropertyAnnouncements.ActiveRow Is Nothing Then Exit Sub

        Dim frm As New frmPropertiesLandAggelies
        frm.id = TAB6GridPropertyAnnouncements.ActiveRow.Cells.Item(1).Value
        frm.txtTest.Text = TAB6GridPropertyAnnouncements.ActiveRow.Cells.Item(3).Value
        frm.txtEdit.Text = TAB6GridPropertyAnnouncements.ActiveRow.Cells.Item(5).Value
        frm.ShowDialog()
        frm.Dispose()
    End Sub