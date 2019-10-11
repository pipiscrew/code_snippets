//http://androidforums.com/application-development/363945-statelistdrawable-not-working.html
//http://stackoverflow.com/questions/12885036/imageview-with-statelistdrawable-not-working

		//int an imageview just with an icon
		ImageView icon = (ImageView) tabIndicator.findViewById(R.id.icon);
		
		//dynamic get the id of picture in resources
		int iconSelectedID = getResources().getIdentifier("com.example.testtab:drawable/" + "your_say_active", null, null);
		int iconUnSelectedID = getResources().getIdentifier("com.example.testtab:drawable/" + "your_say_inactive", null, null);

		//Create a drawble for each image state
//		Drawable iconSelected = getResources().getDrawable(iconSelectedID);
//		Drawable iconUnSelected = getResources().getDrawable(iconUnSelectedID);
		
		//Create a StateListDrawable  
		StateListDrawable	mIcon = new StateListDrawable();
		mIcon.addState(new int[]{android.R.attr.state_selected}, getResources().getDrawable(iconSelectedID));
        mIcon.addState(android.util.StateSet.WILD_CARD, getResources().getDrawable(iconUnSelectedID));
        
        //Finally set it to specific TAB through tabIndicator!
        icon.setImageDrawable(mIcon);