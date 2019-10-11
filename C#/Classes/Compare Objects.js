//http://stackoverflow.com/questions/708205/c-sharp-object-type-comparison

            //name column if already contains the ID (aka ComboItemData) dont do anything
            if (stelexhGRID.Rows[e.RowIndex].Cells[1].Value is ComboItemData)
            {
                MessageBox.Show("valid");
            }
            else
                MessageBox.Show("12312312valid"); 