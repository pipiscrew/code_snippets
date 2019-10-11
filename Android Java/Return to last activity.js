//http://developer.android.com/guide/topics/manifest/activity-element.html
//http://stackoverflow.com/questions/2061143/android-keep-tasks-activity-stack-after-restart-from-home
//http://stackoverflow.com/questions/2059344/retaining-android-app-state-using-alwaysretaintaskstate-and-lauchmode
//http://blorb.tumblr.com/post/236799414/simple-java-android-game-loop

//applies to home button, if u exit with back-back-back button no work.

alwaysRetainTaskState not work @ emulator!

        <activity
            android:name="com.tc.contests.LoginActivity"
   -->         android:alwaysRetainTaskState="true"
            android:label="@string/app_name"
     -->       android:launchMode="singleTask"
            android:noHistory="true" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        
        
//custom
http://stackoverflow.com/questions/2441203/how-to-make-an-android-app-return-to-the-last-open-activity-when-relaunched
http://stackoverflow.com/questions/151777/saving-activity-state-in-android
http://stackoverflow.com/questions/1450019/android-restore-last-viewed-activity