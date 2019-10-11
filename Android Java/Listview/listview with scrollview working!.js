//http://stackoverflow.com/questions/18367522/android-list-view-inside-a-scroll-view

//If you put ListView inside a ScrollView then all the ListView does not 
//stretch to its full height.
//+ listview doesnt catch the scroll event because gotten by scrollview

//the solution is to set the listview heigth manually @ xml
//+ add setOnTouchListener event on listview


//xml

    <ScrollView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/tableRow1_USERPROFILE"
        android:layout_marginBottom="10dp" >
            <ListView
                android:id="@+id/lstvCONTESTSCATEGORIES"
                android:layout_width="wrap_content"
                android:layout_height="200dp" //5lines
                android:layout_below="@id/tableRow5_USERPROFILE"
                android:layout_margin="5dip" />
                
    </ScrollView>
    
    
          
//java
protected void onCreate(Bundle savedInstanceState) {

		lstv.setOnTouchListener(new OnTouchListener() {
		    // Setting on Touch Listener for handling the touch inside ScrollView
		    @Override
		    public boolean onTouch(View v, MotionEvent event) {
		    // Disallow the touch request for parent scroll on touch of child view
		    v.getParent().requestDisallowInterceptTouchEvent(true);
		    return false;
		    }
		});