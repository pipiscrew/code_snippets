	@Override
	public void onBackPressed() {
		// http://www.tech.theplayhub.com/how_to_implement_onbackpressed_in_android_fragments/

		int count = getFragmentManager().getBackStackEntryCount();
		if (count == 1) {
			super.onBackPressed();
			finish();
		} else {
			//http://stackoverflow.com/a/28031401/1320686
			Fragment currentFragment = getFragmentManager().findFragmentById(R.id.frame_container);
			
			if (currentFragment instanceof Frag_Settings) {
				General.mes(MainActivity.this, "is settings");
			} else if (currentFragment instanceof Frag_Offers_Wishlist) {
				General.mes(MainActivity.this, "is wishlist");
			} else {
				General.mes(MainActivity.this, "dunno");
			}
					
			//at drawer - check the first item (we must to do it - frag_offer)
			mDrawerList.setItemChecked(0, true);
			
			getFragmentManager().popBackStack();
		}
	}