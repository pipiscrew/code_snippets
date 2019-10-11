		String[] queries = DATABASE_CREATE.split(";");
		 for(String query : queries)
		        db.execSQL(query);