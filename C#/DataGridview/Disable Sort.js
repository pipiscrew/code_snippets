            DG.Columns.Add("KEYTYPE","");
            DG.Columns.Add("FIELDNAME","Name");
            DG.Columns.Add("FIELDTYPE", "Type");

            DG.Columns[0].SortMode = DataGridViewColumnSortMode.Programmatic;
            DG.Columns[1].SortMode = DataGridViewColumnSortMode.Programmatic;
            DG.Columns[2].SortMode = DataGridViewColumnSortMode.Programmatic;
            
            //OR
            
			foreach (DataGridViewColumn column in dataGridView.Columns)
			{
			    column.SortMode = DataGridViewColumnSortMode.NotSortable;
			}