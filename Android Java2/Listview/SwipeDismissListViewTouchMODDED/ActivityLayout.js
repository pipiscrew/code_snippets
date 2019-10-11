//main
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/RelativeLayout1mess"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical" >

    <ImageView
        android:id="@+id/indicatorLbCmess"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:src="@drawable/indicator" />

    <!-- HEADER -->

    <RelativeLayout
        android:id="@+id/tableRow1_mess"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginBottom="2dip"
        android:background="#009BBF"
        android:orientation="horizontal" >

        <ImageView
            android:id="@+id/imgHeaderOptions_mess"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_alignParentRight="true"
            android:layout_alignParentTop="true"
            android:layout_marginBottom="2dip"
            android:onClick="options_Clicked"
            android:scaleType="fitStart"
            android:src="@drawable/main_header_options" />

        <ImageView
            android:id="@+id/imgHeader_mess"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_centerVertical="true"
            android:layout_marginBottom="2dip"
            android:layout_marginRight="3dp"
            android:scaleType="fitStart"
            android:src="@drawable/cause_support_icon" />

        <TextView
            android:id="@+id/txtBymessheader"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_centerVertical="true"
            android:layout_toRightOf="@id/imgHeader_mess"
            android:text="@string/mails"
            android:textColor="#FFFFFF"
            android:textSize="20sp"
            android:textStyle="bold" />
    </RelativeLayout>

    <ListView
        android:id="@+id/lstv_mess"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/tableRow1_mess"
        android:layout_marginBottom="2dip"
        android:layout_marginLeft="5dip"
        android:layout_marginRight="5dip" />
 </RelativeLayout>
 
 
 
 //row
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
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
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

</LinearLayout>