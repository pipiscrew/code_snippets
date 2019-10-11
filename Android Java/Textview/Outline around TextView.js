//http://stackoverflow.com/questions/5254562/is-there-a-simpler-better-way-to-put-a-border-outline-around-my-textview

//@drawable/textborder.xml

<?xml version="1.0" encoding="UTF-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">
    <solid android:color="#FFFFFF"/>
    <corners android:radius="3dp" />
    <padding android:left="8dp" android:top="8dp"
        android:right="8dp" android:bottom="8dp" />
    <stroke android:color="#439CC8" android:width="2dp" />
</shape>


//@ activity
    <TextView
        android:id="@+id/datesACT2"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@+id/titleACT2"
        android:layout_toRightOf="@+id/logoACT2"
        android:paddingTop="5dp"
        android:paddingLeft="10dp"
        android:textColor="#3399FF"
        android:textSize="14dp"
        android:background="@drawable/textborder"  />