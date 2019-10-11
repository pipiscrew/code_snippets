//if there is a table with 100columns
//is gonna to update only the fields we specify @ ContentValues
		 ContentValues cv=new ContentValues();
		 cv.put( "fpa", cust.getCUST_CITY());
		 cv.put( "NaME", cust.getCUST_NAME());
		 cv.put( "Category", cust.getCUST_PHONE());

		 return database.update("PRODUCTS", cv, "TgUniqueField=?", new String []{String.valueOf(cust.getCUST_ID())});