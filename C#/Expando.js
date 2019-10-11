List<ExpandoObject> Requests =  dbActions.ExecuteReadQuery(SqlRequest, connection).ToList();

foreach (IDictionary<string, object> item in Requests)
{
    Console.WriteLine(item["RequestID"].ToString());
}