//http://stackoverflow.com/questions/2903961/how-to-get-an-items-position-from-items-id-in-android-spinner

	public static int getAdapterPositionById(SimpleCursorAdapter adapter, long id) {
	    final int count = adapter.getCount();

	    for (int pos = 0; pos < count; pos++) 
	        if (id == adapter.getItemId(pos)) 
	            return pos;
	    
	    return 0;
	}