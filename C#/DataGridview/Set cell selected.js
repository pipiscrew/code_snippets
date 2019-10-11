//http://stackoverflow.com/questions/4918904/datagridview-focus-a-specific-cell

DataGridView1.CurrentCell = DataGridView1.Rows[rowindex].Cells[columnindex]
or

DataGridView1.CurrentCell = DataGridView1.Item("ColumnName", 5)
and you can directly focus with Editing by:

dataGridView1.BeginEdit(true)