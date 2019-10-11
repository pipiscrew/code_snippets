//csharp to dbtype
        private static SqlDbType GetSqlDbType(Type type)
        {
            SqlParameter p = new SqlParameter();
            var tc = System.ComponentModel.TypeDescriptor.GetConverter(p.DbType);
            if (tc.CanConvertFrom(type))
                p.DbType = (DbType)tc.ConvertFrom(type.Name);
            else
            {
                try
                {
                    p.DbType = (DbType)tc.ConvertFrom(type.Name);
                }
                catch
                {
                }
            }
            return p.SqlDbType;
        } 
        
        

//http://bytes.com/topic/c-sharp/answers/256345-how-convert-type-dbtype

/// <summary>
/// Get the native type based on the database type
/// </summary>
/// <param name="dbType">The database type to convert</param>
/// <returns>The equivalent managed type, otherwise the DBNull
type</returns>
static Type	 ConvertType( DbType dbType )
{
Type	toReturn	= typeof( DBNull ) ;

switch( dbType )
{
case DbType.String:
toReturn	= typeof( string ) ;
break ;

case DbType.UInt64 :
toReturn	= typeof( UInt64 ) ;
break ;

case DbType.Int64 :
toReturn	= typeof( Int64 ) ;
break ;

case DbType.Int32:
toReturn	= typeof( Int32 ) ;
break ;

case DbType.UInt32:
toReturn	= typeof( UInt32 ) ;
break ;

case DbType.Single:
toReturn	= typeof( float ) ;
break ;

case DbType.Date:
toReturn	= typeof( DateTime) ;
break ;

case DbType.DateTime :
toReturn	= typeof( DateTime ) ;
break ;

case DbType.Time :
toReturn	= typeof( DateTime ) ;
break ;

case DbType.StringFixedLength:
toReturn	= typeof( string ) ;
break ;

case DbType.UInt16:
toReturn	= typeof( UInt16 ) ;
break ;

case DbType.Int16:
toReturn	= typeof( Int16 ) ;
break ;

case DbType.SByte:
toReturn	= typeof( byte ) ;
break ;

case DbType.Object:
toReturn	= typeof( object ) ;
break ;

case DbType.AnsiString :
toReturn	= typeof( string ) ;
break ;

case DbType.AnsiStringFixedLength :
toReturn	= typeof( string ) ;
break ;

case DbType.VarNumeric :
toReturn	= typeof( decimal) ;
break ;

case DbType.Currency:
toReturn	= typeof( double ) ;
break ;

case DbType.Binary :
toReturn	= typeof( byte[] ) ;
break ;

case DbType.Decimal :
toReturn	= typeof( decimal ) ;
break ;

case DbType.Double:
toReturn	= typeof( Double ) ;
break ;

case DbType.Guid :
toReturn	= typeof( Guid ) ;
break ;

case DbType.Boolean :
toReturn	= typeof( bool ) ;
break ;
}

return toReturn ;
}