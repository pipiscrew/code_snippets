    Private Sub chkWinMinVersion_ItemCheck(ByVal sender As Object, ByVal e As System.Windows.Forms.ItemCheckEventArgs) Handles chkWinMinVersion.ItemCheck
        For i As Integer = 0 To chkWinMinVersion.Items.Count - 1
            If i <> e.Index Then chkWinMinVersion.SetItemChecked(i, False)
        Next
    End Sub