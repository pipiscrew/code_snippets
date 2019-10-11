        Dim indexes As ListView.SelectedIndexCollection = Me.lstv.SelectedIndices
        Dim index As Integer
        Dim tmp$

        Form1.lstv.Tag = ""

        For Each index In indexes
            tmp = tmp & lstv.Items(index).Text & ","
            'MsgBox(Me.lstv.Items(index).SubItems(1).Text & " ** " & index)
        Next

        If tmp = "" Then MsgBox("You should select something!", MsgBoxStyle.Exclamation) : Exit Sub

        Form1.lstv.Tag = tmp                    