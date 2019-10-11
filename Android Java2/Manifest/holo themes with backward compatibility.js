//http://www.chilisapps.com/blog/2012/04/17/support-holo-and-older-themes-in-android/
//http://stackoverflow.com/questions/9681648/how-to-use-holo-light-theme-and-fall-back-to-light-on-pre-honeycomb-devices
//http://developer.android.com/about/dashboards/index.html

Many times we would like to support SDK 2.x till 9.x
<uses-sdk
    android:minSdkVersion="8"
    android:targetSdkVersion="16" />
what about when SDK >= 3 use the holo theme and when < 3 use the black one? Alright, lets create custom themes! Thanks Aracem

//values/themes.xml – (Android 2.0+)
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="MyAppTheme" parent="@android:style/Theme.Light.NoTitleBar">
        <!-- Any customizations for your app running on pre-3.0 devices here -->
    </style>
</resources>


//values-v11/themes.xml – (Android 3.0+)
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="MyAppTheme" parent="@android:style/Theme.Holo.Light">
        <!-- Any customizations for your app running on 3.0+ devices here -->
    </style>
</resources>


//values-v14/themes.xml – (Android 4.0+)
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <style name="MyAppTheme" parent="@android:style/Theme.DeviceDefault.Light.NoActionBar">
        <!-- Any customizations for your app running on 4.0+ devices here -->
    </style>
</resources>


//manifest
<application
       ...
       android:theme="@style/MyAppTheme">
