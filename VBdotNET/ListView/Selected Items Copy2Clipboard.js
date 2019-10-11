        If lstv.SelectedIndices.Count = 0 Then Exit Sub

        Dim indexes As ListView.SelectedIndexCollection = Me.lstv.SelectedIndices

        Dim tmp$ = ""

        Dim index%

        For Each index In indexes
            tmp = tmp & lstv.Items(index).SubItems(1).Text & vbCrLf & lstv.Items(index).Tag & vbCrLf & vbCrLf
        Next

        If tmp.Length > 0 Then
            Clipboard.Clear()
            Clipboard.SetDataObject(tmp, TextDataFormat.Text)
        End If