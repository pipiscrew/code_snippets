	public static String timeBetween(Calendar startDate, Calendar endDate) {
		Date start=startDate.getTime();
		Date  end = endDate.getTime();
		
	
		long difference = end.getTime() -start.getTime() ; 
		int days = (int) (difference / (1000*60*60*24));  
		int hours = (int) ((difference - (1000*60*60*24*days)) / (1000*60*60)); 
		int min = (int) (difference - (1000*60*60*24*days) - (1000*60*60*hours)) / (1000*60);
		
		return  String.valueOf(days) + " - " + String.valueOf(hours) + ":" +  String.valueOf(min);
	}