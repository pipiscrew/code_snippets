//activity_main.xml
<android.support.v4.widget.DrawerLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/drawer_layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
 
    <!-- Framelayout to display Fragments -->
    <FrameLayout
        android:id="@+id/frame_container"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
 
    <!-- Listview to display slider menu -->
    <ListView
        android:id="@+id/list_slidermenu"
        android:layout_width="240dp"
        android:layout_height="match_parent"
        android:layout_gravity="start"
        android:choiceMode="singleChoice"
        android:divider="#272727"
        android:dividerHeight="1dp"       
        android:listSelector="@drawable/list_selector"
        android:background="#303030"/>
</android.support.v4.widget.DrawerLayout>
 
 
//menu > main.xml
<menu xmlns:android="http://schemas.android.com/apk/res/android" >
    <item
        android:id="@+id/action_test"
        android:orderInCategory="100"
        android:showAsAction="never"
        android:title="@string/action_test"/>
    <item
        android:id="@+id/action_pipiscrew"
        android:orderInCategory="100"
        android:showAsAction="never"
        android:title="@string/pipiscrew"/>
</menu>


//activity_main.java
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }
     
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // toggle nav drawer on selecting action bar app icon/title
        if (mDrawerToggle.onOptionsItemSelected(item)) {
            return true;
        }
         
        // Handle action bar actions click
        switch (item.getItemId()) {
        case R.id.action_test:
            test();
            return true;
        default:
            return super.onOptionsItemSelected(item);
        }
    }
 
    private void test()
    { 
        //is a test!
        Fragment currentFragment = getFragmentManager().findFragmentById(R.id.frame_container);
 
        if (currentFragment instanceof my_fragment) {
            my_fragment x = (my_fragment) currentFragment;
            x.pipiscrew_method();
        }
    }
    
    
//my_fragment.java
    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);
         
        //Report that this fragment would like to participate in populating the options menu by receiving a call  -  http://developer.android.com/reference/android/app/Fragment.html
        setHasOptionsMenu(true);
    }
     
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
 
        // Handle action bar actions click
        switch (item.getItemId()) {
        case R.id.action_pipiscrew:
            pipiscrew_method();
            return true;
        default:
            return super.onOptionsItemSelected(item);
        }
    }
     
    private void pipiscrew_method()
    { 
        //is pipiscrew_method!
    }