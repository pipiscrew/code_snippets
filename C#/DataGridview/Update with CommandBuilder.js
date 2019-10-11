//fill grid
	            //store SQL for update 
	            DG.Tag = SQL;

	            DataTable dT;
	            dT = General.DB.ExecuteSQL(SQL, out rowsAffected, out error);
                DG.DataSource = dT;
                
                
	//when is dataset
                DG.Tag = sSQL;

                objDataAdapter = new SQLiteDataAdapter(sSQL, General.ConneSQLite.GetConnection());
                objDataAdapter.MissingSchemaAction = MissingSchemaAction.AddWithKey;
                objDataAdapter.Fill(dataSet);
                
                DG.DataMember = dataSet.Tables[0].TableName;
                DG.DataSource = dataSet;
                //replace UpdateGrid datatable to dataset

//update button
        public string UpdateGrid(DataGridView DG)
        {
            try
            {
                string sql = null;
                SqlDataAdapter da;
                DataTable dt;
                int x = 0;

                // Setup SQL (This is the original table where the data was retrieved when grid was filled, it will also be the table updated)
                sql = DG.Tag.ToString();
                //"select * from " & MainForm.tr.SelectedNode.Text.Substring(0, MainForm.tr.SelectedNode.Text.LastIndexOf("[") - 1)

                // Setup DataAdapter
                da = new SqlDataAdapter(sql, Connection.GetConnection());

                // Create a command builder (this is needed for the update to work)
                SqlCommandBuilder cb = new SqlCommandBuilder(da);

                // Get Current Data from datagrid
                dt =  (DataTable) DG.DataSource;

                // Update Table through DataAdapter
                x = da.Update(dt);

                return (x.ToString() + " record(s) updated.");
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }