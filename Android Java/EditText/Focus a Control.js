//focus by Code
	EditText e = (EditText) 
	findViewById(R.id.destination); 
	e.requestFocus();

//focus by XML
        <EditText
            android:id="@+id/EditText03"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="10dp"
            android:ems="10" >

            <requestFocus />
        </EditText>