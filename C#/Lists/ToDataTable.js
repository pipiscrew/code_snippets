//http://geekswithblogs.net/Aligned/archive/2015/12/03/sql-bulk-copy.aspx

var bulkCopy = new SqlBulkCopy(ConfigurationManager.ConnectionStrings["GisContext"].ConnectionString)
{
    DestinationTableName = "CountyParcel"
};

bulkCopy.WriteToServer(data.ToDataTable());
bulkCopy.Close();

public static DataTable ToDataTable<T>(this List<T> list)
{
    var dataTable = new DataTable(typeof(T).Name);
    var properties = typeof (T).GetProperties(BindingFlags.Public | BindingFlags.Instance);
    foreach (var property in properties)
    {
        dataTable.Columns.Add(property.Name);
    }
    foreach (var item in list)
    {
        var values = new object[properties.Length];

        for (var i = 0; i < properties.Length; i++)
        {
            values[i] = properties[i].GetValue(item, null);
        }

        dataTable.Rows.Add(values);
    }

    return dataTable;
}