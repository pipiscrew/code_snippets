<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              android:layout_width="fill_parent" 
              android:layout_height="fill_parent" 
              android:orientation="vertical" >
    <TextView         android:id="@+id/txtTitle"
        android:layout_width="fill_parent"
        android:layout_height="50dip"
        android:layout_margin="0dip"
        android:gravity="center" />

     <WebView
         android:id="@+id/webView1"
         android:layout_width="match_parent"
         android:layout_height="match_parent" />

 </LinearLayout>