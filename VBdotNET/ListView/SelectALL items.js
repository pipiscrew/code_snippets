    Private Sub LSTVSelectALL(ByVal ctl As ListView)
        For Each item In ctl.Items
            item.Selected = True
        Next
    End Sub