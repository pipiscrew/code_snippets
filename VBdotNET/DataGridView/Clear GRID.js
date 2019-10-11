    Private Sub ClearGRID(ByVal destCTL As DataGridView)
        Dim rw As DataGridViewRow

        For Each rw In destCTL.Rows
            destCTL.Rows.Remove(rw)
        Next
    End Sub
    
    
    
    
    
    for cols
    
        For Each cl In DataGridView1.Columns
            DataGridView1.Columns.Remove(cl)
        Next