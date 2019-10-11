
	@Override
	public void onBackPressed() {

		String CompCategories = "#";
		String CauseCategories = "#";

		for (Generic4lstv item : rowItems) {
			if (item.getIsSelected())
				CompCategories += item.getRowID() + "#";
		}

		for (Generic4lstv item : rowCAUSEItems) {
			if (item.getIsSelected())
				CauseCategories += item.getRowID() + "#";
		}

		SharedPreferences options = getSharedPreferences("userprofile", MODE_PRIVATE);
		SharedPreferences.Editor editor = options.edit();
		editor.putString("CompCategories", CompCategories);
		editor.putString("CauseCategories", CauseCategories);
		editor.commit();

//when remarked back is not fired
		super.onBackPressed();
	}



//http://stackoverflow.com/questions/4779954/disable-back-button-in-android

If looking for android api level upto 1.6.

@Override
public boolean onKeyDown(int keyCode, KeyEvent event) {
     if (keyCode == KeyEvent.KEYCODE_BACK) {
     //preventing default implementation previous to android.os.Build.VERSION_CODES.ECLAIR
     return true;
     }
     return super.onKeyDown(keyCode, event);    
}
And if looking for a higher api level 2.0 and above this will work great

@Override
public void onBackPressed() {
    // Do Here what ever you want do on back press;
}



//example
	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
		if (keyCode == KeyEvent.KEYCODE_BACK) {

			// check if viewing the causes 
			LinearLayout rel = (LinearLayout) findViewById(R.id.lastLSTVrelative);
			if (rel.getVisibility() == View.VISIBLE)
				return true; //disable go back
			
			//otherwise act like normal
		}
		return super.onKeyDown(keyCode, event);
	}