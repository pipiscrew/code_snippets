//http://stackoverflow.com/questions/203377/getting-the-max-value-of-an-enum
Enum.GetValues(typeof(DatabaseType)).GetUpperBound(0)

        public enum DatabaseType
        {
            OleDB,
            SQLServer,
            SQLCe,
            SQLite
        }
        
        
        will got 3