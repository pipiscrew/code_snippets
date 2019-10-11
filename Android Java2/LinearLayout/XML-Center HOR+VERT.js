<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="horizontal" >

    <ImageView
        android:id="@+id/mailIcon"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        
        //is doesnt take place when is linearlayout android:layout_centerInParent="true"
        android:layout_gravity="center_vertical|center_horizontal"
        android:src="@drawable/mail" />
        


    <LinearLayout android:id="@+id/linearLayout1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:padding="6dp"    >

        <TextView android:id="@+id/titleTextView"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:textSize="16sp" />

        <TextView android:id="@+id/dateTextView"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:textSize="12sp" />

    </LinearLayout>

</LinearLayout>