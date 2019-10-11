    Private Sub LISTNOMARXIES_ItemCheck(ByVal sender As Object, ByVal e As System.Windows.Forms.ItemCheckEventArgs) Handles LISTNOMARXIES.ItemCheck
        CheckUncheckPERIOXES(e.NewValue, e.Index)
    End Sub

    Private Sub CheckUncheckPERIOXES(ByVal tt As System.Windows.Forms.CheckState, ByVal listIndex%)
        For i = 0 To LISTPERIOXES.Items.Count - 1
            If LISTPERIOXES.Items(i).itemdata2 = LISTNOMARXIES.Items(listIndex).itemdata Then
                LISTPERIOXES.SetItemCheckState(i, tt)
            End If
        Next
    End Sub