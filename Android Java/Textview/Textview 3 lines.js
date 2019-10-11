<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".style_web" >

    <TextView
        android:id="@+id/txtTitle"
        android:layout_width="fill_parent"
        android:layout_height="50dip"
        android:layout_margin="0dip"
        android:gravity="center" />

</RelativeLayout>



//multiline
    <TextView
            android:id="@+id/tblrow"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_margin="15dp"
            android:maxLines="3"
            android:textSize="12dp"
            android:singleLine="false"
            />