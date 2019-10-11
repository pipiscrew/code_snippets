		DisplayMetrics metrics = new DisplayMetrics();
		getWindowManager().getDefaultDisplay().getMetrics(metrics);

		General.heightPX = metrics.heightPixels;
		General.widthPX = metrics.widthPixels;

		General.screen52widthPX = ((metrics.widthPixels / 5) * 2);
		
		
		
//dp
		Display display = getWindowManager().getDefaultDisplay();
		DisplayMetrics outMetrics = new DisplayMetrics();
		display.getMetrics(outMetrics);

		float density = getResources().getDisplayMetrics().density;
		float dpHeight = outMetrics.heightPixels / density;
		float dpWidth = outMetrics.widthPixels / density;
		float properWidth = ((dpWidth / 3) * 2);
		float properHeight = ((dpHeight / 4) * 2);

		General.screen52widthDP = (int) properWidth;// properWidth;
		General.screen52heigthDP = (int) properHeight;