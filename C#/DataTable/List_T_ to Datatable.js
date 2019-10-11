public static DataTable ListToDataTable<T>(List<T> list)
{
    DataTable table = new DataTable();
    foreach (PropertyInfo info in typeof(T).GetProperties())
    {
        table.Columns.Add(new DataColumn(info.Name, GetNullableType(info.PropertyType)));
    }
    foreach (T local in list)
    {
        DataRow row = table.NewRow();
        foreach (PropertyInfo info2 in typeof(T).GetProperties())
        {
            if (!IsNullableType(info2.PropertyType))
            {
                row[info2.Name] = info2.GetValue(local, null);
            }
            else
            {
                row[info2.Name] = info2.GetValue(local, null) ?? DBNull.Value;
            }
        }
        table.Rows.Add(row);
    }
    return table;
}

 

 
