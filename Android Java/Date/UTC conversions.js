	//returns a valid DATE object from UNIX timestamp
	public static Date getDateFromUNIX(String val)
	{
		long dv = Long.valueOf(val)*1000;
		return new java.util.Date(dv); //user GMT applied here
	}

	//returns a valid DATE string from UNIX timestamp
	public static String getDateStringFromUNIX(String val)
	{
		long dv = Long.valueOf(val)*1000;
		Date df = new java.util.Date(dv); //user GMT applied here
		String vv = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss").format(df);
		return vv;
	}
	
	//returns UNIX timestamp in long - UTC applied
	public static String getUTCforNOW()
	{
		return String.valueOf(System.currentTimeMillis() / 1000L);
	}






//http://stackoverflow.com/questions/732034/getting-unixtime-in-java

//http://www.onlineconversion.com/unix_time.htm

	//get UTC NOW in UNIX format
	public static String getUTCforNOW()
	{
		return   String.valueOf(System.currentTimeMillis() / 1000L);
	}
	
	//get datetime (with user GMT) from UNIX long
	public static String getDateFromUNIX(String val)
	{
		long dv = Long.valueOf(val)*1000;// its need to be in milisecond
		Date df = new java.util.Date(dv);
		String vv = new SimpleDateFormat("MM dd, yyyy hh:mma").format(df);
		return vv;
	}
	
	//or
	//get datetime (with user GMT) from UNIX long same as ^^
	public static String getDateFromUNIX(String val)
	{
		Calendar endDate=Calendar.getInstance(TimeZone.getDefault());
		long dv = Long.valueOf(arg0.child("dateEnd").getValue().toString()) * 1000;
		endDate.setTimeInMillis(dv);
		return endDate.getTime().toString();
	}




///
                SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                f.setTimeZone(TimeZone.getTimeZone("UTC"));
                General.showAlert(f.format(new Date()), MainActivity.this);