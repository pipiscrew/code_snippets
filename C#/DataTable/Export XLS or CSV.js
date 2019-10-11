        private void button4_Click(object sender, EventArgs e)
        {
            if (dg.Rows.Count == 0)
            {
                MessageBox.Show("There is no rows!");
                return;
            }

            try
            {
                string filename = Application.StartupPath + "\\" + (dg.Columns.Count > 3 ? "query" : "report") + " " + dtp1.Value.ToString("yyyy-MM-dd") + " - " + dtp2.Value.ToString("yyyy-MM-dd") + " " + DateTime.Now.ToString("hh:mm:ss").Replace(":", "");

                if (File.Exists(filename))
                {
                    MessageBox.Show(filename + "\r\nalready exists!");
                    return;
                }

                if ((Control.ModifierKeys & Keys.Shift) == Keys.Shift)
                {
                    filename += ".csv";
                    CreateCSVFile((DataTable)dg.DataSource, filename);
                }
                else
                {
                    filename += ".xls";
                    CreateXLS((DataTable)dg.DataSource, filename);
                }


                General.PointFile(filename);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void CreateXLS(DataTable dt, string fl)
        {
            using (OleDbConnection conn = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + fl + ";Extended Properties='Excel 8.0;HDR=Yes'"))
            {
                conn.Open();

                OleDbCommand cmd = new OleDbCommand(BuildCreateTableCommand(dt), conn);
                cmd.ExecuteNonQuery();

                for (int i = 0; i < dg.Rows.Count; i++)
                {
                    cmd = new OleDbCommand(BuildInsertCommand(dt, i), conn);
                    cmd.ExecuteNonQuery();
                }

            }

            return;
        }

        //http://stackoverflow.com/questions/10591600/insert-datatable-into-excel-using-microsoft-access-database-engine-via-oledb
        /// <summary>
        /// Routine to construct the INSERT INTO command. This does not currently 
        /// work with the data type miss matches.
        /// </summary>
        /// <param name="dataTable"></param>
        /// <param name="rowIndex"></param>
        /// <returns></returns>
        private static string BuildInsertCommand(DataTable dataTable, int rowIndex)
        {
            StringBuilder sb = new StringBuilder();

            // Remove whitespace.
            sb.AppendFormat("INSERT INTO [{0}$](", "PipisCrew");
            foreach (DataColumn col in dataTable.Columns)
                sb.AppendFormat("[{0}],", col.Caption.Replace(' ', '_'));
            sb = sb.Replace(',', ')', sb.ToString().LastIndexOf(','), 1);

            // Write values.
            sb.Append("VALUES (");
            foreach (DataColumn col in dataTable.Columns)
            {
                string type = col.DataType.ToString();
                string strToInsert = String.Empty;
                strToInsert = dataTable.Rows[rowIndex][col].ToString().Replace("'", "''");
                sb.AppendFormat("'{0}',", strToInsert);
            }
            sb = sb.Replace(',', ')', sb.ToString().LastIndexOf(','), 1);
            return sb.ToString();
        }

        /// <summary>
        /// Routine to build the CREATE TABLE command. The conversion of 
        /// .NET to Excel data types is also handled here (supposedly!). 
        /// Help: http://support.microsoft.com/kb/316934/en-us.
        /// </summary>
        /// <param name="dataTable"></param>
        /// <returns>The CREATE TABLE command string.</returns>
        private static string BuildCreateTableCommand(DataTable dataTable)
        {
            // Get the type look-up tables.
            StringBuilder sb = new StringBuilder();

            // Check for null data set.
            if (dataTable.Columns.Count <= 0)
                return null;

            // Start the command build.
            sb.AppendFormat("CREATE TABLE [{0}] (", "PipisCrew");

            // Build column names and types.
            foreach (DataColumn col in dataTable.Columns)
            {
                sb.AppendFormat("[{0}] {1},", col.Caption.Replace(' ', '_'), "TEXT");
            }
            sb = sb.Replace(',', ')', sb.ToString().LastIndexOf(','), 1);
            return sb.ToString();
        }


        public void CreateCSVFile(DataTable dt, string filepath)
        {
            StreamWriter stw = new StreamWriter(filepath, false);

            int iColCount = dt.Columns.Count;
            for (int i = 0; i < iColCount; i++)
            {
                stw.Write(dt.Columns[i]);
                if (i < iColCount - 1)
                {
                    stw.Write(",");
                }
            }
            stw.Write(stw.NewLine);
            foreach (DataRow dr in dt.Rows)
            {
                for (int i = 0; i < iColCount; i++)
                {
                    if (!Convert.IsDBNull(dr[i]))
                    {
                        stw.Write(dr[i].ToString());
                    }
                    if (i < iColCount - 1)
                    {
                        stw.Write(",");
                    }
                }
                stw.Write(stw.NewLine);
            }

            stw.Close();
        }