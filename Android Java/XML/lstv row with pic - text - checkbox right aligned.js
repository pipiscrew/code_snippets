<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent" >

    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:baselineAligned="false"
        android:orientation="horizontal" >

        <ImageView
            android:id="@+id/IMG_userProfile_ContestROW"
            android:layout_width="40dp"
            android:layout_height="40dp"
            android:layout_marginRight="5dp"
            android:scaleType="fitStart" />

        <TextView
            android:id="@+id/rowTitle_ContestROW"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:textSize="15sp" />
    </LinearLayout>

    <CheckBox
        android:id="@+id/chk_ContestROW"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignParentRight="true"
        android:gravity="right" />

</RelativeLayout>