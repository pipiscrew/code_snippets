//http://social.msdn.microsoft.com/Forums/en/winformsdatacontrols/thread/657f8b87-c8c1-4c2b-ac8d-2a84e9c287f0
//http://msdn.microsoft.com/en-us/library/system.windows.forms.datagridviewimagecolumn.aspx
//http://www.daniweb.com/software-development/csharp/threads/386188/fill-datagridviewimagecolumn-cells-with-icon

        private void frmTable_Load(object sender, EventArgs e)
        {
            DataGridViewImageColumn iconColumn = new DataGridViewImageColumn();
            iconColumn.Width = 30;

            DG.Columns.Add(iconColumn);
            DG.Columns.Add("FIELDNAME","Name");
            DG.Columns.Add("FIELDTYPE", "Type");

            
            //DG.Columns[0].Width = 30;
            DG.Columns[1].Width = 150;
            DG.Columns[2].Width = 120;
            DG.Columns[0].SortMode = DataGridViewColumnSortMode.Programmatic;
            DG.Columns[1].SortMode = DataGridViewColumnSortMode.Programmatic;
            DG.Columns[2].SortMode = DataGridViewColumnSortMode.Programmatic;
        }

        private void DG_RowsAdded(object sender, DataGridViewRowsAddedEventArgs e)
        {
            DG.Rows[DG.Rows.Count - 1].Cells[0].Value =SQLiteManager.Properties.Resources.field161;
        }