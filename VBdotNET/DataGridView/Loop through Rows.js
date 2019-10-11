        If dt.Rows.Count = 0 Then Exit Sub

        Dim i%
        Dim tmp$ = ""

        For i = 0 To dt.Rows.Count - 1
            tmp = tmp & dt.Rows(i).Cells(0).Value & vbCrLf
        Next

        Copy2Clipboard(tmp)