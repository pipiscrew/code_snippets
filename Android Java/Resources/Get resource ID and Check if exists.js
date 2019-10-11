		//dynamic get the id of picture in resources		
		int iconSelectedID = getResources().getIdentifier("com.example.testtab:drawable/" + imgSelected, null, null);
		int iconUnSelectedID = getResources().getIdentifier("com.example.testtab:drawable/" + imgUnSelected, null, null);
		
		//if resource not exists 
		if (iconSelectedID == 0 )
			 iconSelectedID = getResources().getIdentifier("com.example.testtab:drawable/about_us_active", null, null);

		if (iconUnSelectedID == 0 )
			iconUnSelectedID = getResources().getIdentifier("com.example.testtab:drawable/about_us_inactive", null, null);
			
//OR function


	public static boolean checkIfResourceExists(Context baseContext, String resourceName) {
		try {
			int test = baseContext.getResources().getIdentifier(resourceName, "drawable", baseContext.getPackageName());
			if (test != 0)
				return true;
		} finally {
			return false;
		}
	}