//@ drawable folder a XML named textview_click_color.xml

	<?xml version="1.0" encoding="utf-8"?>
	<selector xmlns:android="http://schemas.android.com/apk/res/android">
	
	    <item android:state_selected="true" android:color="@android:color/white" />
	    <item android:state_focused="true" android:color="@android:color/white" />
	    <item android:state_pressed="true" android:color="#FF8000" />
	    <item android:color="#FFFFFF" /> 
	</selector>
	
	
//@ activity XML

        <TextView
            android:id="@+id/link_to_register"
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:gravity="center"
            android:text="forgot your login?"
            android:textColor="@drawable/textview_click_color"
            android:clickable="true"
            android:onClick="link_Clicked"
            android:textSize="20sp" />