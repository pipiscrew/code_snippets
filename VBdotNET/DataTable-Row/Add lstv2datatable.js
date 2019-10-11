        'Add lstvItems to DataTABLE
        Dim TableLines As DataTable
        Dim TableRows As DataRow
        Dim i%

        TableLines = New DataTable("LinesTable")

        Dim col1Item As DataColumn = New DataColumn("Item No", Type.GetType("System.String"))
        col1Item.ReadOnly = True
        Dim col2Item As DataColumn = New DataColumn("Item Description", Type.GetType("System.String"))
        col2Item.ReadOnly = True
        Dim col3Item As DataColumn = New DataColumn("Quantity", Type.GetType("System.Double"))
        Dim col4Item As DataColumn = New DataColumn("Price", Type.GetType("System.Double"))
        col4Item.ReadOnly = True
        Dim col5Item As DataColumn = New DataColumn("Tax Code", Type.GetType("System.String"))
        col5Item.ReadOnly = True
        Dim col6Item As DataColumn = New DataColumn("Total (LC)", Type.GetType("System.Double"))

        TableLines.Columns.Add(col1Item)
        TableLines.Columns.Add(col2Item)
        TableLines.Columns.Add(col3Item)
        TableLines.Columns.Add(col4Item)
        TableLines.Columns.Add(col5Item)
        TableLines.Columns.Add(col6Item)

        TableLines.AcceptChanges()

        For i = 0 To lstv.Items.Count - 1
            TableRows = TableLines.NewRow()
            TableRows(0) = lstv.Items(i).Text
            TableRows(1) = lstv.Items(i).SubItems(1).Text
            TableRows(2) = lstv.Items(i).SubItems(2).Text
            TableRows(3) = lstv.Items(i).SubItems(3).Text
            TableRows(4) = lstv.Items(i).SubItems(4).Text
            TableRows(5) = lstv.Items(i).SubItems(5).Text
            TableLines.Rows.Add(TableRows)
        Next

        TableLines.AcceptChanges()
        'Add lstvItems to DataTABLE
