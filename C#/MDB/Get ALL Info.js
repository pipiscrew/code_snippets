//http://msdn.microsoft.com/en-us/library/system.data.oledb.oledbconnection.getoledbschematable%28v=vs.71%29.aspx
//http://forums.codeguru.com/archive/index.php/t-396516.html

//GET TABLE NAMES
                    dTtbl = General.ConneADO.GetConnection().GetSchema("Tables");
                    dTtbl.DefaultView.Sort = "TABLE_NAME";

                    foreach (DataRowView dR in dT.DefaultView)
                    {

                        if (dR["TABLE_TYPE"].ToString().ToLower() == "table")
                            tables.Add(dR["TABLE_NAME"].ToString());
                    }

                    dTtbl.Dispose();
                    
                    
                    
                    
                    
/// <summary>
/// Gets names of all tables
/// </summary>
/// <returns>DataTable</returns>
private DataTable GetTableNames() 
{
DataTable schemaTable = _Connection.GetOleDbSchemaTable(OleDbSchemaGuid.Tables, new Object[] {null, null, null, "TABLE"});	
return schemaTable;
}

/// <summary>
/// Gets primary keys for a table
/// </summary>
/// <param name="tablename">Name of table</param>
/// <returns>DataTable</returns>
private DataTable GetPrimaryKeys(string tablename) 
{
DataTable schemaTable = _Connection.GetOleDbSchemaTable(OleDbSchemaGuid.Primary_Keys, new Object[] {null, null, tablename});

return schemaTable;
}

/// <summary>
/// Gets foreign keys for a table
/// </summary>
/// <param name="tablename">Name of table</param>
/// <returns>DataTable</returns>
private DataTable GetForeignKeys(string tablename) 
{
DataTable schemaTable = _Connection.GetOleDbSchemaTable(OleDbSchemaGuid.Foreign_Keys, new Object[] {null, null, tablename});

return schemaTable;
}

/// <summary>
/// Gets constraints for a table
/// </summary>
/// <param name="tablename">Name of table</param>
/// <returns>DataTable</returns>
private DataTable GetConstraints(string tablename) 
{
DataTable schemaTable = _Connection.GetOleDbSchemaTable(OleDbSchemaGuid.Constraint_Column_Usage, new Object[] {null, null, tablename, null, null, null});

return schemaTable;	
}

/// <summary>
/// Gets table constraints for a table
/// </summary>
/// <param name="tablename">Name of table</param>
/// <returns>DataTable</returns>
private DataTable GetTableConstraints(string tablename) 
{
DataTable schemaTable = _Connection.GetOleDbSchemaTable(OleDbSchemaGuid.Table_Constraints, new Object[] {null, null, null, null, null, tablename});

return schemaTable;
}

/// <summary>
/// Gets constraints for a column
/// </summary>
/// <returns>DataTable</returns>
private DataTable GetColumnConstraints() 
{
DataTable schemaTable = _Connection.GetOleDbSchemaTable(OleDbSchemaGuid.Check_Constraints, new Object[] {null, null, null});

return schemaTable;	
}

/// <summary>
/// Gets indexes for a table
/// </summary>
/// <param name="tablename">Name of table</param>
/// <returns>DataTable</returns>
private DataTable GetIndexes(string tablename) 
{
DataTable schemaTable = _Connection.GetOleDbSchemaTable(OleDbSchemaGuid.Indexes, new Object[] {null, null, null, null, tablename});

return schemaTable;
}

/// <summary>
/// Gets columns for a table
/// </summary>
/// <param name="tablename">Name of table</param>
/// <returns>DataTable</returns>
private DataTable GetTableColumns(string tablename) 
{
DataTable schemaTable = _Connection.GetOleDbSchemaTable(OleDbSchemaGuid.Columns, new Object[] {null, null, tablename});

return schemaTable;
}

/// <summary>
/// Gets column details for a table
/// </summary>
/// <param name="tablename">Name of table</param>
/// <returns>DataTable</returns>
private DataTable GetTableColumnDetails(string tablename)
{
OleDbCommand cmd=new OleDbCommand(String.Format("SELECT TOP 1 * FROM [{0}]",tablename),_Connection);
OleDbDataReader reader=cmd.ExecuteReader(CommandBehavior.KeyInfo);
DataTable schemaTable = reader.GetSchemaTable();
reader.Close();

return schemaTable;
}

/// <summary>
/// Gets stored procedures
/// </summary>
/// <returns>DataTable</returns>
private DataTable GetStoredProcedures()
{
try
{
OleDbCommand cmd=new OleDbCommand();
cmd.Connection=_Connection;
cmd.CommandText=@"SELECT Name, Flag, Expression, Name1, Name2, Attribute FROM MSysObjects INNER JOIN MSysQueries ON MSysObjects.ID=MSysQueries.ObjectId";
OleDbDataAdapter adapter=new OleDbDataAdapter(cmd);
DataTable schemaTable=new DataTable();
adapter.Fill(schemaTable);
return schemaTable;
}
catch (OleDbException ex)
{
if (ex.ErrorCode==-2147217911)
{
string msg=
"Insufficent access rights for the MSysObjects and MSysQueries tables" + Environment.NewLine +
"" + Environment.NewLine +
"To correct, please open the source Database in Access, and" + Environment.NewLine +
"" + Environment.NewLine +
"1. In Tools - Options - Show, check 'System Objects'" + Environment.NewLine +
"2. In Tools - Security - User and Group Permissions, mark" + Environment.NewLine +
" the MSysObjects and MSysQueries tables, and give admin read rights" + Environment.NewLine +
"3. In Tools - Options - Show you may now uncheck 'System Objects'";
throw new ApplicationException(msg);
}
else 
throw ex;
}
}