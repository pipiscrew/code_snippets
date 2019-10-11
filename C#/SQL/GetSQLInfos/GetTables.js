
        #region " CONNECT BUTTON "

        private void btnConnect_Click(object sender, EventArgs e)
        {
            Cursor = System.Windows.Forms.Cursors.WaitCursor;

            try
            {
                btnNewSchema.PerformClick();

                General.ADOClass = new ADOnet("Provider=SQLOLEDB;Data Source=" + txtServer.Text + ";Initial Catalog=" + txtDBASE.Text + ";User ID=" + txtUser.Text + ";Password=" + txtPassword.Text);




                //validate if table exists
                string tmp;
                tmp = General.ADOClass.ExecuteSQLScalar("select count(import_id) from IMPORT_MAPPER");

                if (tmp == null)
                {
                    if (MessageBox.Show("IMPORT_MAPPER table not found!\r\n\r\nDo you want to create it!?", General.apTitle, MessageBoxButtons.YesNo, MessageBoxIcon.Exclamation) == DialogResult.Yes)
                    {
                        //string result;

                        //create table
                        General.ADOClass.ExecuteSQL(ImportMapper.Properties.Resources.CreateTABLE.Replace("$catalog$", txtDBASE.Text));

                        tmp = General.ADOClass.ExecuteSQLScalar("select count(import_id) from IMPORT_MAPPER");

                        if (tmp == null)
                        {
                            MessageBox.Show("Table cant created", General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                            return;
                        }
                    }
                    else
                        return;
                }
                //validate if table exists

                //read the relations for later use when treeview selected index changed 
                General.DBASEkeys = General.ADOClass.GetDataTable("SELECT                                           " +
                                                            "FK_Table = FK.TABLE_NAME,                        " +
                                                            "FK_Column = CU.COLUMN_NAME,                      " +
                                                            "PK_Table = PK.TABLE_NAME,                        " +
                                                            "PK_Column = PT.COLUMN_NAME,                      " +
                                                            "Constraint_Name = C.CONSTRAINT_NAME,              " +
                                                            "DBSCHEMA=PK.Constraint_Schema              " +
                                                            "FROM                                             " +
                                                            "INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS C     " +
                                                            "INNER JOIN                                       " +
                                                            "INFORMATION_SCHEMA.TABLE_CONSTRAINTS FK          " +
                                                            "ON C.CONSTRAINT_NAME = FK.CONSTRAINT_NAME        " +
                                                            "INNER JOIN                                       " +
                                                            "INFORMATION_SCHEMA.TABLE_CONSTRAINTS PK          " +
                                                            "ON C.UNIQUE_CONSTRAINT_NAME = PK.CONSTRAINT_NAME " +
                                                            "INNER JOIN                                       " +
                                                            "INFORMATION_SCHEMA.KEY_COLUMN_USAGE CU           " +
                                                            "ON C.CONSTRAINT_NAME = CU.CONSTRAINT_NAME        " +
                                                            "INNER JOIN                                       " +
                                                            "(                                                " +
                                                            "SELECT                                           " +
                                                            "i1.TABLE_NAME, i2.COLUMN_NAME                    " +
                                                            "FROM                                             " +
                                                            "INFORMATION_SCHEMA.TABLE_CONSTRAINTS i1          " +
                                                            "INNER JOIN                                       " +
                                                            "INFORMATION_SCHEMA.KEY_COLUMN_USAGE i2           " +
                                                            "ON i1.CONSTRAINT_NAME = i2.CONSTRAINT_NAME       " +
                                                            "WHERE i1.CONSTRAINT_TYPE = 'PRIMARY KEY'         " +
                                                            ") PT                                             " +
                                                            "ON PT.TABLE_NAME = PK.TABLE_NAME ORDER BY 3,4    ");


                treeV1.Nodes.Clear();

                DataTable dT;

                dT = General.ADOClass.GetConnection().GetSchema("Tables");

                dT.DefaultView.Sort = "TABLE_NAME";

                /////////dataGridView1.DataSource = dT;

                //root nodes
                treeV1.Nodes.Add("t", "Tables", 0, 0);  //0
                treeV1.Nodes.Add("v", "Views", 0, 0);   //1

                foreach (DataRowView dR in dT.DefaultView)
                {

                    if (dR["TABLE_TYPE"].ToString().ToLower() == "table")
                    {
                        //if (dR["TABLE_SCHEMA"].ToString().ToLower() != "dbo")
                        //    treeV1.Nodes[0].Nodes.Add("tbl", "[" + dR["TABLE_SCHEMA"].ToString() + "].[" + dR["TABLE_NAME"].ToString() + "]", 1, 1);
                        //else
                        if (dR["TABLE_SCHEMA"].ToString() == "dbo")
                            treeV1.Nodes[0].Nodes.Add("tbl", "[" + dR["TABLE_NAME"].ToString() + "]", 1, 1);
                        else
                            treeV1.Nodes[0].Nodes.Add("tbl", dR["TABLE_SCHEMA"].ToString() + ".[" + dR["TABLE_NAME"].ToString() + "]", 1, 1);
                    }
                    else if (dR["TABLE_TYPE"].ToString() == "VIEW")
                        treeV1.Nodes[1].Nodes.Add("tbl", "[" + dR["TABLE_NAME"].ToString() + "]", 2, 2);
                }


                dT.Dispose();

                treeV1.Nodes[0].Expand(); //by default expand TABLES node!

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, General.apTitle, MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            finally
            {
                Cursor = System.Windows.Forms.Cursors.Default;
            }
        }


        #endregion