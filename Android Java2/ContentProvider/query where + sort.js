	public static List<Automotodetails> getAutomotodetailsMINMAX(Context cx, Long min,Long max) {
		List<Automotodetails> automotodetailss = new ArrayList<Automotodetails>();
		Automotodetails automotodetails = null;
		String[] result_columns = new String[] {  SQLiteHelper.TABLE_AUTOMOTODETAIL_ID_COLUMN, SQLiteHelper.TABLE_AUTOMOTO_ID_COLUMN, SQLiteHelper.TABLE_KM_DATEREC_COLUMN, SQLiteHelper.TABLE_KM_COUNTER_COLUMN, SQLiteHelper.TABLE_FIXES_COLUMN, SQLiteHelper.TABLE_COST_COLUMN, SQLiteHelper.TABLE_PLACE_COLUMN, SQLiteHelper.TABLE_COMMENT_COLUMN, SQLiteHelper.TABLE_AUTOMOTODETAIL_DATEREC_COLUMN, SQLiteHelper.TABLE_AUTOMOTODETAIL_GUID_COLUMN, };
		
		ContentResolver cr = cx.getContentResolver();
		Cursor cursor  = cr.query( AutomotodetailsContentProvider.TABLE_URI, result_columns, "km_counter between " + min.toString() +" and " + max.toString(),null,  "km_counter");
		
		cursor.moveToFirst();
		while (!cursor.isAfterLast()) {
			automotodetails = cursorToAutomotodetails(cursor);
			automotodetailss.add(automotodetails);
			cursor.moveToNext();
		}

		// Make sure to close the cursor
		cursor.close();
		return automotodetailss;
	}