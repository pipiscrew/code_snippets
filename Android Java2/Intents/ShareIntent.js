//http://stackoverflow.com/a/12942533
//http://stackoverflow.com/questions/19657266/handle-shareactionprovider-onclick-event

//res/menu/a.xml
<menu xmlns:android="http://schemas.android.com/apk/res/android" >

    <item
        android:id="@+id/menu_automoto_share"
        android:actionProviderClass="android.widget.ShareActionProvider"
        android:showAsAction="ifRoom"
        android:title="@string/share"/>
</menu>

//a.java

	private ShareActionProvider mShareActionProvider;

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.auto_moto_details, menu);

		/** Getting the actionprovider associated with the menu item whose id is share */
		mShareActionProvider = (ShareActionProvider) menu.findItem(R.id.menu_automoto_share).getActionProvider();

		/** Setting a share intent */
		mShareActionProvider.setShareIntent(getDefaultShareIntent());
//		mShareActionProvider.setOnShareTargetSelectedListener(new OnShareTargetSelectedListener() {
//	        @Override
//	        public boolean onShareTargetSelected(ShareActionProvider actionProvider, Intent intent) {
//
//	    		
//	    		
//	            return false;
//	        }
//	    });
	    
		return super.onCreateOptionsMenu(menu);

		// return true;
	}
	
	//this run when activity loaded
	/** Returns a share intent */
	private Intent getDefaultShareIntent() {
		Intent intent = new Intent(Intent.ACTION_SEND);
		intent.setType("text/plain");

		AutomotodetailsDatasource x = new AutomotodetailsDatasource(this);
		List<Automotodetails> y = x.getAllAutomotodetailss(parent_id);

		String out = "";
		for (Automotodetails item : y) {
			out += String.valueOf(item.getkm_counter()) + "km\t" + item.getkm_daterec() + "\r\n------------------------------\r\n";
			out += item.getfixes() + "\r\n\r\n\r\n";
		}

		intent.putExtra(Intent.EXTRA_SUBJECT, "SUBJECT");
		intent.putExtra(Intent.EXTRA_TEXT, out);
		return intent;
	}
	
//when using dbase, when adding new items didnt update the share^ so on every fill_list must recall getDefaultShareIntent()
	public void fill_list() {
	.
	.
	.
	  	  if(mShareActionProvider!=null) {
			  mShareActionProvider.setShareIntent(getDefaultShareIntent());
	     }
	}