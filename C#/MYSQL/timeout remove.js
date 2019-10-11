//http://stackoverflow.com/questions/4315701/c-sharp-mysql-connection-timeout-on-query-on-large-table

        public DataTable GetDATATABLE(string SQLSTR)
        {
            MySqlDataAdapter sqlAD = new MySqlDataAdapter();
            DataTable sqlSET = new DataTable();
            MySqlCommand sqlco = new MySqlCommand();

            try
            {
                sqlco.CommandText = SQLSTR;
                sqlco.Connection = objConn;

                sqlco.CommandTimeout = 0; //setting to 0 wait for ever

                sqlAD.SelectCommand = sqlco;

                sqlAD.Fill(sqlSET);

                return sqlSET;

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "SQLClass - GetDATATABLE");
                return null;
            }
            finally
            {
                sqlco.Dispose();
                sqlAD.Dispose();
                sqlSET.Dispose();
            }
        }