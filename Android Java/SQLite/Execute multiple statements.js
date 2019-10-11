	private static final String DATABASE_CREATE = "CREATE TABLE [CITIES] ("
			+ "Name TEXT, " + "TgInTimeStamp TEXT, "
			+ "TgUniqueField INTEGER PRIMARY KEY);CREATE TABLE [COMPANY] ("
			+ "Titlos TEXT, " + "Epag TEXT, " + "Die TEXT, " + "Til TEXT, "
			+ "Fax TEXT, " + "Afm TEXT, " + "Doi TEXT, " + "Email TEXT, "
			+ "Firma TEXT, " + "Kinito TEXT, " + "ConGenLog TEXT, "
			+ "tk TEXT, " + "fname TEXT, " + "taytotita TEXT, "
			+ "PelCode INTEGER, " + "PromCode INTEGER, " + "ParCode INTEGER, "
			+ "SinCode INTEGER, " + "LastDate TEXT, " + "eEponimia TEXT, "
			+ "eServer TEXT, " + "epassword TEXT, " + "eUrl TEXT, "
			+ "eepagelma TEXT, " + "eYpoepagelma TEXT, " + "eperigrafi TEXT, "
			+ "epoli TEXT, " + "enomos TEXT, " + "eLog TEXT, "
			+ "eConnected TEXT, " + "lname TEXT, " + "onfather TEXT, "
			+ "mskkk TEXT, " + "personalcomp TEXT, " + "AMIFESTOS TEXT, "
			+ "IFESTOSPassword TEXT, " + "TgUniqueField INTEGER PRIMARY KEY);";
			
		db.beginTransaction();

		try {
			String[] queries = DATABASE_CREATE.split(";");
			for (String query : queries)
				db.execSQL(query);

			db.setTransactionSuccessful();
		} finally {
			db.endTransaction();
		}