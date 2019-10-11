@drawable a file called:
	gradientcolor.xml

<?xml version="1.0" encoding="UTF-8"?> 
<shape
xmlns:android="http://schemas.android.com/apk/res/android"
android:shape="rectangle">
<gradient
    android:startColor="#151B8D"
    android:endColor="#ff0000"
    android:angle="270" />
</shape>




on a layout file :

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical" android:layout_width="fill_parent"
    android:layout_height="fill_parent" android:background="@drawable/gradientcolor">
    <EditText android:layout_width="fill_parent" android:text="1"
        android:layout_height="wrap_content" android:id="@+id/editText1"
        android:inputType="numberSigned"
        android:layout_margin="5dip" android:gravity="center">
        <requestFocus></requestFocus>
    </EditText>
    <Button android:layout_width="wrap_content"
        android:layout_height="wrap_content" android:id="@+id/button1"
        android:text="boo"></Button>
</LinearLayout>