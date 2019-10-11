//Once you create a text filein the /res/raw folder, use this to execute the tSQL
//http://stackoverflow.com/a/9809772/1320686

		db.beginTransaction();

		try {
			InputStream Stream = c.getResources().openRawResource(R.raw.countries);
			String countries_predefined_sql = General.convertStreamToString(Stream);

			String queries = countries_predefined_sql.split(";");
			for (String query : queries)
				db.execSQL(query);
			
			db.setTransactionSuccessful();
		} finally {
			db.endTransaction();
		}
		
		
		public final class General {
		
			public static String convertStreamToString(java.io.InputStream is) {
				java.util.Scanner s = new java.util.Scanner(is).useDelimiter("\\A");
				return s.hasNext() ? s.next() : "";
			}
		
		}
