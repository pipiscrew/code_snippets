//http://stackoverflow.com/questions/6176391/stop-scrollview-from-auto-scrolling-to-an-edittext
//create an empty view at the top of scrollview!! tested&working!
<View android:layout_width="fill_parent" android:id="@+id/focus_view" android:layout_height="0dp" android:focusable="true" android:focusableInTouchMode="true"><requestFocus/></View>


^^



//http://stackoverflow.com/questions/16886077/android-scrollview-doesnt-start-at-top-but-at-the-beginning-of-the-gridview

GridView/ListView child automatically requests parent focus (ScrollView) 
when you "hack" and resize its content with ExpandableHeightGridView, 
which happens after layout is rendered, and hence you see that animation
when trying to scroll it up with scrollTo() (happens AFTER layout is created
 and AFTER gridView is resized) and makes that ugly patch animation.

So then the solution was to disable focus on the ListView/GridView with:

final ListView listView = new ListView(this);
    listView.setFocusable(false);
    
    
    
//also no working with
scrollView.fullScroll(ScrollView.FOCUS_UP);

//or with
runOnUiThread(new Runnable() {
	public void run() {
		//http://stackoverflow.com/questions/9690246/why-does-my-android-activity-always-start-scrolled-to-the-bottom
		ScrollView s = (ScrollView) findViewById(R.id.mainScrollView);
		s.scrollTo(530,0); //fullScroll(ScrollView.FOCUS_UP);
	}
});