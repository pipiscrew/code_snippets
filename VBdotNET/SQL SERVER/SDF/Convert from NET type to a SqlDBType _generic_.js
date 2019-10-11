'source
'http://stackoverflow.com/questions/1104082/programmatically-create-a-sqlce-table-from-datatable
'the use of this is when have the dbase @ datatable
/// <summary>
/// Gets the correct SqlDBType for a given .NET type. Useful for working with SQL CE.
/// </summary>
/// <param name="type">The .Net Type used to find the SqlDBType.</param>
/// <returns>The correct SqlDbType for the .Net type passed in.</returns>
public static SqlDbType GetSqlDBTypeFromType(Type type)
{
    TypeConverter tc = TypeDescriptor.GetConverter(typeof(DbType));
    if (/*tc.CanConvertFrom(type)*/ true)
    {
        DbType dbType = (DbType)tc.ConvertFrom(type.Name);
        // A cheat, but the parameter class knows how to map between DbType and SqlDBType.
        SqlParameter param = new SqlParameter();
        param.DbType = dbType;
        return param.SqlDbType; // The parameter class did the conversion for us!!
    }
    else
    {
        throw new Exception("Cannot get SqlDbType from: " + type.Name);
    }
}
