            SQLiteTransaction trans = null;
            trans = General.ConneSQLite.GetConnection().BeginTransaction();
//ur code here
            trans.Commit();
            trans.Dispose();