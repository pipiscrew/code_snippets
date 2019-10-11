	Calendar currentcal = Calendar.getInstance();	
	Calendar cal = Calendar.getInstance();
	currentcal.set(currentcal.get(Calendar.YEAR),currentcal.get(Calendar.MONTH), currentcal.get(Calendar.DAY_OF_MONTH));
	cal.set(Integer.parseInt(bomb[0]) , Integer.parseInt(bomb[1]), Integer.parseInt(bomb[2]));
	
	if(cal.before(currentcal))
	{					            			
		errorHandler.sendEmptyMessage(0);
	}	