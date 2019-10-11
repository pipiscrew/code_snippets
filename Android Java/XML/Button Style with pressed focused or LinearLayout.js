//http://stackoverflow.com/questions/6054562/how-to-make-the-corners-of-a-button-round
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android" >
 <item android:state_pressed="true" >
     <shape android:shape="rectangle"  >
         <corners android:radius="3dip" />
         <stroke android:width="1dip" android:color="#5e7974" />
         <gradient  android:angle="-90"   android:startColor="#345953"android:endColor="#689a92"  />            
     </shape>
 </item>
<item android:state_focused="true">
     <shape android:shape="rectangle"  >
         <corners android:radius="3dip" />
         <stroke android:width="1dip" android:color="#5e7974" />
         <solid  android:color="#58857e"/>       
     </shape>
 </item>  
<item >
    <shape android:shape="rectangle"  >
         <corners android:radius="3dip" />
         <stroke android:width="1dip" android:color="#5e7974" />
         <gradient  android:angle="-90"  android:startColor="#8dbab3" android:endColor="#58857e" />            
     </shape>
 </item>
</selector>


//use
<Button
    android:id="@+id/button1"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:padding="10dp"
    android:textColor="#ffffff"
    android:background="@drawable/mybutton"
    android:text="Button" />
    


//http://stackoverflow.com/questions/3634191/how-to-center-icon-and-text-in-a-android-button-with-width-set-to-fill-parent
//can be used also @ linerlayout to have the same results!
    <LinearLayout
        android:id="@+id/linearButton"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:layout_below="@id/RELcompDetails"
        android:layout_marginLeft="10dip"
        android:layout_marginRight="10dip"
        android:background="@drawable/votebutton"
        android:clickable="true"
        android:descendantFocusability="blocksDescendants"
        android:gravity="center"
        android:orientation="horizontal" >

        <ImageView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:src="@drawable/hand_vote" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="@string/app_name"
            android:textColor="@android:color/white" />
    </LinearLayout>