//on activity must have
 @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu, menu);
        return true;
    }
    
    
you use the normal menu xml as is, but needs to have the property 
android:showAsAction="never"

ex.
<menu xmlns:android="http://schemas.android.com/apk/res/android" >

    <item
        android:id="@+id/userProfile"
        android:showAsAction="never"
        android:title="@string/menus_user_profile"/>
    <item
        android:id="@+id/menuByCauses"
        android:showAsAction="never"
        android:title="@string/menus_support"/>
    <item
        android:id="@+id/menuBySupporters"
        android:showAsAction="never"
        android:title="@string/menus_sponsors"/>
    <item
        android:id="@+id/purchase"
        android:showAsAction="never"
        android:title="@string/purchase"
        android:visible="true"/>
    <item
        android:id="@+id/signout"
        android:showAsAction="never"
        android:title="@string/disconnect"/>
    <item
        android:id="@+id/about"
        android:showAsAction="never"
        android:title="@string/menus_about"/>

</menu>