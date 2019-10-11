//http://stackoverflow.com/a/24084110

//way1
int index = (dgv.Rows.Cast<DataGridViewRow>()
                    .Where(r => r.Cells[0].Value == SearchForThis)
                    .Select(r => r.Index)).First();
                    
//way2
int index = (from r in dgv.Rows.Cast<DataGridViewRow>()
            where r.Cells[0].Value == SearchForThis
            select r.Index).First();
            
//way3
string select_col = dg.SelectedColumns[0].HeaderText;

var queryLastNames = (from DataGridViewRow r in dg.Rows
                      group r by r.Cells[select_col].Value into fieldb_grp
                      select fieldb_grp);

dg.DataSource = queryLastNames.ToList();