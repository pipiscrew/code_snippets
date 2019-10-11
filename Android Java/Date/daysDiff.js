	private String getCompetitionEnd(String unixtamp) {
		// get datetime now
		Calendar nowDate=Calendar.getInstance(TimeZone.getDefault());
		nowDate.setTimeInMillis(System.currentTimeMillis());

		long dv = Long.valueOf(unixtamp) * 1000; // its need to be in milisecond
		
		Calendar endDate=Calendar.getInstance(TimeZone.getDefault());
		endDate.setTimeInMillis(dv);
		
		//Date endDate = new java.util.Date(dv); // convert it automatic to user
	
		 Log.w("ads","Start time is :" + nowDate.getTime());
		 Log.w("ads","End time is :" + endDate.getTime());
		 
		long distance = daysBetween(nowDate, endDate);

		return distance + " days";
	}

	
    public static long daysBetween(Calendar startDate, Calendar endDate) {
        Calendar date = (Calendar) startDate.clone();
        long daysBetween = 0;
        while (date.before(endDate)) {
            date.add(Calendar.DAY_OF_MONTH, 1);
            daysBetween++;
        }
        return daysBetween;
    }