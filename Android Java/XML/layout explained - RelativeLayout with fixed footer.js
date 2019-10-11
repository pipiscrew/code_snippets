//http://stackoverflow.com/questions/16812191/android-listview-with-fixed-header-and-footer
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/RelativeLayout1"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:orientation="vertical" >

    <ImageView
        android:id="@+id/imgHeader"
        android:layout_width="640dip"
        android:layout_height="80dip"
        android:layout_alignParentTop="true"
        android:layout_centerHorizontal="true"
        android:src="@drawable/main_header" />
    <!-- http://stackoverflow.com/questions/3404582/adding-text-to-imageview-in-android -->

    <HorizontalScrollView
        android:id="@+id/horizontalScrollView1"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/imgHeader"
        android:layout_marginBottom="10dip"
        android:fillViewport="true" >

        <LinearLayout
            android:id="@+id/categoriesHZScroll"
            android:layout_width="wrap_content"
            android:layout_height="fill_parent"
            android:background="#ff0000"
            android:orientation="horizontal" >
        </LinearLayout>
    </HorizontalScrollView>

    <!-- android:layout_below="@id/firstLayout" -->
    <ListView
        android:id="@+id/lstv"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/horizontalScrollView1"
        android:layout_above="@+id/causebuttonsupport" />
    
    <ImageView
        android:id="@+id/causebuttonsupport"
        android:layout_width="194dip"
        android:layout_height="60dip"
        android:layout_alignParentBottom="true"
        android:layout_alignParentLeft="true"
        android:src="@drawable/causebuttonyposthrizoyme" />

    <HorizontalScrollView
        android:id="@+id/horizontalScrollView2"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_alignParentBottom="true"
        android:layout_toRightOf="@id/causebuttonsupport"
        android:fillViewport="true" >

        <LinearLayout
            android:id="@+id/causesHZScroll"
            android:layout_width="wrap_content"
            android:layout_height="fill_parent"
            android:background="#ff0000"
            android:orientation="horizontal" >
        </LinearLayout>
    </HorizontalScrollView>



</RelativeLayout>