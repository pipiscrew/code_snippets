
    Private Sub KryptonTextBox1_KeyUp(ByVal sender As Object, ByVal e As System.Windows.Forms.KeyEventArgs) Handles KryptonTextBox1.KeyUp
        If e.KeyCode = Keys.Enter Then
            If KryptonTextBox1.Text.Trim.Length > 0 Then
                If CustGrid.SelectedRows.Count = 0 Then Exit Sub

                Dim prevSearchIndex% = CustGrid.SelectedRows(0).Index + 1
                Dim x% = 0
                For x = prevSearchIndex To (CustGrid.Rows.Count - 1)
                    If CustGrid.Item(1, x).Value.ToString.ToLower.Contains(KryptonTextBox1.Text.ToLower) Then
                        CustGrid.Item(1, x).Selected = True
                        CustGrid.FirstDisplayedScrollingRowIndex = x
                        CustGrid.CurrentCell = CustGrid.Rows(x).Cells(1)
                        ' ReadGridRow()
                        Exit For
                    End If
                Next
            End If
        End If
    End Sub

    Private Sub KryptonTextBox1_TextChanged(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonTextBox1.TextChanged

        Dim x% = 0
        For x = 0 To CustGrid.Rows.Count - 1
            If CustGrid.Item(1, x).Value.ToString.ToLower.Contains(KryptonTextBox1.Text.ToLower) Then
                CustGrid.Item(1, x).Selected = True
                CustGrid.FirstDisplayedScrollingRowIndex = x
                CustGrid.CurrentCell = CustGrid.Rows(x).Cells(1)
                ' ReadGridRow()
                Exit For
            End If
        Next

    End Sub