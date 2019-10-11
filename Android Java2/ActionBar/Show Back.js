//quick method
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        getActionBar().setDisplayHomeAsUpEnabled(true);
    }
    
	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		switch (item.getItemId()) {
		case android.R.id.home:
			finish();
			break;
		default:
			return super.onOptionsItemSelected(item);
		}
		
		return true;
	}

/////////////////////////////////////////////
//http://stackoverflow.com/a/13471504

public class ServicesViewActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // etc...
        getActionBar().setDisplayHomeAsUpEnabled(true);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
        case android.R.id.home:
            NavUtils.navigateUpFromSameTask(this);
            //finish();
            return true;
        default:
            return super.onOptionsItemSelected(item);
        }
    }
}
//The function NavUtils.navigateUpFromSameTask(this) requires you to define the parent activity in the AndroidManifest.xml file

    <activity android:name="com.example.ServicesViewActivity" >
            <meta-data
            android:name="android.support.PARENT_ACTIVITY"
            android:value="com.example.ParentActivity" />
    </activity>
//http://developer.android.com/design/patterns/navigation.html#up-vs-back