//http://www.sqlite.org/c3ref/last_insert_rowid.html

lastID = int.Parse(General.Conne.ExecuteSQLScalar("select last_insert_rowid();").ToString());