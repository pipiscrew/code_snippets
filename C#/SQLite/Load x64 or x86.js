//load x86 or x64
//source https://github.com/duplicati/duplicati/tree/master/Duplicati/Library/SQLiteHelper

public static Type get_SQLiteConnectionType()
{
    if (m_type == null)
    {
        string filename = "System.Data.SQLite.dll";
        string basePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), "SQLite");
        string assemblyPath = Path.Combine(basePath, "pinvoke");
        if (!Duplicati.Library.Utility.Utility.IsMono)
        {
            if (Duplicati.Library.Utility.Utility.Is64BitProcess)
            {
                if (File.Exists(Path.Combine(Path.Combine(basePath, "win64"), filename)))
                {
                    assemblyPath = Path.Combine(basePath, "win64");
                }
            }
            else if (File.Exists(Path.Combine(Path.Combine(basePath, "win32"), filename)))
            {
                assemblyPath = Path.Combine(basePath, "win32");
            }
        }
        else if (Environment.GetEnvironmentVariable("DISABLE_MONO_DATA_SQLITE") == null)
        {
            try
            {
                Type t = Assembly.Load("Mono.Data.Sqlite, Version=2.0.0.0, Culture=neutral, PublicKeyToken=0738eb9f132ed756").GetType("Mono.Data.Sqlite.SqliteConnection");
                if ((t != null) && (t.GetInterface("System.Data.IDbConnection", false) != null))
                {
                    Version v = new Version((string) t.GetProperty("SQLiteVersion").GetValue(null, null));
                    if (v >= new Version(3, 6, 3))
                    {
                        m_type = t;
                        return m_type;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(string.Format("Failed to load Mono.Data.Sqlite.SqliteConnection, reverting to built-in.{0} Error message: {1}", Environment.NewLine, ex.ToString()));
            }
        }
        m_type = Assembly.LoadFile(Path.Combine(assemblyPath, filename)).GetType("System.Data.SQLite.SQLiteConnection");
    }
    return m_type;
}

 

 
