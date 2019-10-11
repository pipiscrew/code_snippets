
//way1
//on fragment itself call :
getFragmentManager().popBackStack();



//way2
//on activity shows the fragment - to catch back button press
	@Override
	public void onBackPressed() {
		int count = getFragmentManager().getBackStackEntryCount();
		if (count == 0) { //when use it with drawer make it 1
			super.onBackPressed();
		} else {
			getFragmentManager().popBackStack();
		}
	}
 
//way2 - warning you must call the fragment with addToBackStack
//http://www.tech.theplayhub.com/how_to_implement_onbackpressed_in_android_fragments/
FragmentManager fragmentManager = getFragmentManager();
fragmentManager.beginTransaction().replace(R.id.frame_container, fragment).addToBackStack(null).commit();