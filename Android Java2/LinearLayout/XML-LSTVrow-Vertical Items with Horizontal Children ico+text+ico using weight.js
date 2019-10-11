<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="horizontal" >

    <ImageView
        android:id="@+id/mailIcon"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_vertical|center_horizontal"
        android:src="@drawable/mail" />
    
    <LinearLayout android:id="@+id/linearLayout1"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="vertical"
        android:layout_weight="1"
        android:padding="6dp"    >

        <TextView android:id="@+id/titleTextView"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:textSize="16sp" />

        <TextView android:id="@+id/dateTextView"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_weight="0"
            android:maxLines="1"
            android:textSize="12sp" />

    </LinearLayout>
    
    
    <ImageView
        android:layout_weight="0"
        android:id="@+id/shareIcon"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center_vertical|right"
        android:visibility="gone"
        android:src="@drawable/share" />

</LinearLayout>