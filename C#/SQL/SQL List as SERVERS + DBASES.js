//list all SERVERS
//http://msdn.microsoft.com/en-us/library/a6t1z9x2.aspx

        private void txtServer_DropDown(object sender, EventArgs e)
        {
            if (txtServer.Items.Count > 0)
                return;

            Cursor = System.Windows.Forms.Cursors.WaitCursor;

            try
            {
                // Retrieve the enumerator instance and then the data.
                System.Data.Sql.SqlDataSourceEnumerator instance = System.Data.Sql.SqlDataSourceEnumerator.Instance;
                System.Data.DataTable table = instance.GetDataSources();

                foreach (System.Data.DataRow row in table.Rows)
                {
                    txtServer.Items.Add(row["ServerName"] + (row["InstanceName"].ToString().Length > 0 ? "\\" + row["InstanceName"].ToString() : ""));
                }
            }
            finally
            {
                Cursor = System.Windows.Forms.Cursors.Default;
            }

        }


//list all DBASES
            if (txtServer.Text.Trim().Length > 0 && txtUser.Text.Trim().Length > 0 && txtPassword.Text.Trim().Length > 0)
            {
                OleDbConnection objConn = null;

                txtDBASE.Items.Clear();

                try
                {
                    objConn = new OleDbConnection("Provider=SQLOLEDB;Data Source=" + txtServer.Text + ";Initial Catalog=master;User ID=" + txtUser.Text + ";Password=" + txtPassword.Text);
                    objConn.Open();

                    OleDbDataReader sqlread = null;
                    OleDbCommand sqlco = new OleDbCommand();

                    sqlco.Connection = objConn;
                    sqlco.CommandText = "EXEC sp_databases";

                    sqlread = sqlco.ExecuteReader();

                    while (sqlread.Read())
                    {
                        //
                        if (sqlread["DATABASE_NAME"].ToString().ToLower() == "master" || sqlread["DATABASE_NAME"].ToString().ToLower() == "model" || sqlread["DATABASE_NAME"].ToString().ToLower() == "msdb" || sqlread["DATABASE_NAME"].ToString().ToLower() == "tempdb" || sqlread["DATABASE_NAME"].ToString().ToLower().StartsWith("reportserver$"))
                            ;
                        else
                            txtDBASE.Items.Add(sqlread["DATABASE_NAME"]);
                    }
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message, "HOTECH", MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                }
                finally
                {
                    if (objConn != null)
                    {
                        objConn.Close();
                        objConn.Dispose();
                        objConn = null;
                    }
                }

