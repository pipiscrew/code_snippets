        <LinearLayout
            android:id="@+id/linearLayout2"
            android:layout_width="fill_parent"
            android:layout_height="fill_parent"
            android:layout_gravity="bottom"
            android:orientation="horizontal" >

            <Button
                android:id="@+id/btnLogin"
                android:layout_width="fill_parent"
                android:layout_height="wrap_content"
                android:layout_marginBottom="10dip"
                android:layout_marginTop="10dip"
                android:layout_weight="1"
                android:onClick="btnLogin_Click"
                android:text="Login" />

            <Button
                android:id="@+id/btnRegister"
                android:layout_width="fill_parent"
                android:layout_height="wrap_content"
                android:layout_marginBottom="10dip"
                android:layout_marginTop="10dip"
                android:layout_weight="1"
                android:onClick="btnRegister_Click"
                android:text="Register" />
        </LinearLayout>
        
        
	public void btnLogin_Click(View view)
	{
			Toast.makeText(getBaseContext(), "this is a test", Toast.LENGTH_LONG).show();
	}