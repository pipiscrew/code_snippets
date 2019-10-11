        For i = 0 To DataGridView1.Rows.Count - 1
            MsgBox(DataGridView1.Rows(i).Cells(0).Value)
            MsgBox(DataGridView1.Rows(i).Cells("ID3v2").Value)
        Next