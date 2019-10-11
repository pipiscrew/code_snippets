//http://stackoverflow.com/questions/2372415/how-to-change-color-of-android-listview-separator-line

    <ListView
        android:id="@+id/lstv"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_above="@+id/horizontalScrollView2"
        android:layout_below="@id/horizontalScrollView1"
        android:layout_marginBottom="2dip"
        
        //this
        android:divider="#009FC3"
    	android:dividerHeight="4px" />