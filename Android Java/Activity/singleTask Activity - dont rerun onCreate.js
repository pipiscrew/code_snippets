        <activity
            android:name="com.tc.contests.MainActivity2"
            android:screenOrientation="portrait"
            android:launchMode="singleTask"
            android:label="@string/app_name" >
        </activity>
        
        *never* use singleInstance sometimes re run the application!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
singleTask/singleInstance = it doesnt create the activity when called ex.

when we have a shortcut menu to each activity we just bring the main front via :

					myIntent = new Intent().setClass(Supporter_Details.this, MainActivity2.class);
					myIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
					startActivity(myIntent);
					
and also disable to MainActivity2 the back button!
					
					
//references :
http://stackoverflow.com/questions/7674477/android-how-to-start-activity-without-creating-new-one
http://stackoverflow.com/questions/2424488/android-new-intent-starts-new-instance-with-androidlaunchmode-singletop
http://www.intridea.com/blog/2011/6/16/android-understanding-activity-launchmode