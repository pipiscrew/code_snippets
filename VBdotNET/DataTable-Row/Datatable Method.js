    Private ParamTable As New DataTable

        ParamTable.Columns.Add("paramName")
        ParamTable.Columns.Add("paramVALUE")
        ParamTable.Columns.Add("paramTYPE")
        ParamTable.Columns.Add("paramDIRECTION")
        ParamTable.Columns.Add("paramLENGTH")

        Dim row As DataRow
        row = ParamTable.NewRow()

        ' Then add the new row to the collection.
        row("paramName") = "John"
        row("paramVALUE") = "Smith"
        ParamTable.Rows.Add(row)

        Dim column As DataRow
        For Each column In ParamTable.Rows
            MsgBox(column(0).ToString)
        Next