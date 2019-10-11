    Private Sub Button38_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button38.Click
        ClearLSTV(lstv3)
    End Sub

    Private Sub ClearLSTV(ByVal listV As ListView)
        If listV.Items.Count = 0 Then Exit Sub

        If MsgBox("WARNING!" & vbCrLf & vbCrLf & listV.Items.Count & " item(s) will be deleted" & vbCrLf & vbCrLf & "Are you sure ?", MsgBoxStyle.Exclamation + MsgBoxStyle.YesNo, apTitle) = MsgBoxResult.No Then Exit Sub

        listV.Items.Clear()
    End Sub