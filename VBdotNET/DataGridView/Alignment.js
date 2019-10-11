        dt.Columns.Add("Operand", "Operand")
        dt.Columns.Add("Name", "Name")
        dt.Columns.Add("Size", "Size")
        dt.Columns.Add("Description", "Description")
        dt.Columns(0).Width = 60
        dt.Columns(1).Width = 60
        dt.Columns(1).Visible = False
        dt.Columns(2).Width = 30
        dt.Columns(2).Visible = False
        dt.Columns(3).Width = 480
        dt.Columns(3).Visible = False
        dt.Columns(0).SortMode = DataGridViewColumnSortMode.NotSortable
        dt.Columns(1).SortMode = DataGridViewColumnSortMode.NotSortable

        dt.Columns(2).DefaultCellStyle.Alignment = DataGridViewContentAlignment.MiddleCenter
        dt.Columns(2).SortMode = DataGridViewColumnSortMode.NotSortable
        dt.Columns(3).SortMode = DataGridViewColumnSortMode.NotSortable