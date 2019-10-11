       public DataTable CleanDataTable(DataTable dt)
        {
            for (int a = 0; a < dt.Rows.Count; a++)
            {
                for (int i = 0; i < dt.Columns.Count; i++)
                {
                    if (dt.Rows[a][i] == DBNull.Value)
                    {
                        Type type = dt.Columns[i].DataType;
                        if (type == typeof(decimal) || type == typeof(int) || type == typeof(float) || type == typeof(double) ||
                           type == typeof(SqlInt16) || type == typeof(SqlInt32) || type == typeof(SqlInt64) || type == typeof(SqlDecimal) || type == typeof(SqlDouble))
                        {
                            dt.Columns[i].ReadOnly = false;
                            dt.Rows[a][i] = 0;
                        }
                        else if (type == typeof(string) || type == typeof(SqlString))
                        {
                            dt.Columns[i].ReadOnly = false;
                            dt.Rows[a][i] = "";
                        }
                        else if (type == typeof(Boolean) || type == typeof(SqlBoolean))
                        {
                            dt.Columns[i].ReadOnly = false;
                            dt.Rows[a][i] = false;
                        }
                        else if (type == typeof(DateTime) || type == typeof(SqlDateTime))
                        {
                            dt.Rows[a][i] = "01/01/1970";
                        }
                        else
                            dt.Rows[a][i] = "";
                    }
                }
            }

            return dt;
        }