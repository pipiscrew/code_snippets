//https://stackoverflow.com/a/24218840/1320686
int total = dataGridView1.Rows.Cast<DataGridViewRow>()
                .Sum(t => Convert.ToInt32(t.Cells[1].Value));