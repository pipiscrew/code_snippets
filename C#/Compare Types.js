//http://stackoverflow.com/questions/5482844/how-to-compare-types
 if (DG.Columns[0].CellType == typeof( DataGridViewImageCell ))
                MessageBox.Show(DG.Columns[0].CellType.ToString());