    dg.DataSource = (from DataGridViewRow row in dg.Rows
                     select row.Cells[0].Value.ToString()).GroupBy(row => row).ToList();