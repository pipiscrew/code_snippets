//http://stackoverflow.com/questions/3330435/is-there-a-sqlite-equivalent-to-mysqls-describe-table
//get create table TSQL

			//no working?
			PRAGMA table_info([customers])
//or
            object s = General.Conne.ExecuteSQLScalar("SELECT sql FROM sqlite_master WHERE name ='customers'");
            Console.WriteLine(s.ToString());