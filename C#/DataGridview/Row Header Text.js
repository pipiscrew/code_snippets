            foreach (DataGridViewRow item in GRID.Rows)
            {
                item.HeaderCell.Value = rowIndex;
                rowIndex += 1;