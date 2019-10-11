//main_activity_super.xml
<menu xmlns:android="http://schemas.android.com/apk/res/android" >
    <item android:id="@+id/logout"
          android:title="logout"
          android:showAsAction="never"/>
        <item android:id="@+id/refresh"
          android:title="refresh"
          android:showAsAction="never"/>
    
<!--         http://stackoverflow.com/questions/8312344/how-to-add-a-dropdown-item-on-the-action-bar -->
</menu>


	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// getActionBar().setDisplayShowHomeEnabled(false);
		// Inflate the menu items for use in the action bar
		getActionBar().setTitle("Contests Admins");
		getActionBar().setDisplayUseLogoEnabled(false);

		MenuInflater inflater = getMenuInflater();
		inflater.inflate(R.menu.main_activity_super, menu);
		return super.onCreateOptionsMenu(menu);
	}
	
	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle item selection
		switch (item.getItemId()) {
		case R.id.logout:
			logoutADMIN();
			return true;
		case R.id.refresh:
			 complain(String.valueOf(mViewPager.getCurrentItem()));
			// People_Pending.class.getName()

			//get active fragment (int)
			switch (mViewPager.getCurrentItem()) {
			case 0:
				CompetitionsPending compPending = (CompetitionsPending) getSupportFragmentManager().findFragmentByTag(
						"android:switcher:" + mViewPager.getId() + ":" + 0);
				compPending.queryDB();

			case 1:
				People_Pending pplPending = (People_Pending) getSupportFragmentManager().findFragmentByTag(
						"android:switcher:" + mViewPager.getId() + ":" + 1);
				pplPending.queryDB();
			}
		}

		return false;
	}