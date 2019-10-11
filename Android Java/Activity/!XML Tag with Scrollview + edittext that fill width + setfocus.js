<?xml version="1.0" encoding="utf-8"?>
<ScrollView xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/scrollView1"
    android:layout_width="match_parent"
    android:layout_height="fill_parent"
    android:layout_weight="1" >

    <LinearLayout
        xmlns:android="http://schemas.android.com/apk/res/android"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:orientation="vertical" >

        <TextView
            android:id="@+id/lblFPA"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="FPA :"
            android:textAppearance="?android:attr/textAppearanceMedium"
            android:textColor="@android:color/white" />

        <EditText
            android:id="@+id/txtFPA"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="10dp"
            android:ems="10" >
            <requestFocus />
        </EditText>
    </LinearLayout>

</ScrollView>