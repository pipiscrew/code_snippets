	public static Long automotodetailssMAX_Cursor(Context cx) {
		ContentResolver cr = cx.getContentResolver();
		Cursor c  = cr.query(AutomotodetailsContentProvider.TABLE_URI, new String[] {"max(km_counter)"}, null, null, null);
		
		c.moveToFirst();
		Long res = c.getLong(0);
		c.close();		
	
		return res;
	}