//http://mobile.tutsplus.com/tutorials/android/android-sdk-implement-an-options-menu/

Menus XMLs stands @:

res > menu > activity_menu.xml

warnign 1menu can exist to any activity.

sample menu.xml :
			<menu xmlns:android="http://schemas.android.com/apk/res/android" >
			
			    <item android:id="@+id/menu_settings"
			        android:title="@string/menu_settings"/>
				<item android:id="@+id/about"
					android:title="About" />
				<item android:id="@+id/help"
					android:title="Help" />
				
			</menu>
			
on activity must add :
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.activity_kmain, menu);
		return true;
	}

	//handle here the action
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
        case R.id.about:
        startActivity(new Intent(this, KMainActivity.class));
        return true;
        case R.id.help:
        startActivity(new Intent(this, KMainActivity.class));
        return true;
        default:
        return super.onOptionsItemSelected(item);
        }
    }