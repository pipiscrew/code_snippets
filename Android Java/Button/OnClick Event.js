@ designer @ properties goto View > OnClick and write btnAdd_Click
now goto activity and make a proc with the same name ex.

	public void btnAdd_Click(View view)
	{
			Toast.makeText(getBaseContext(), "this is a test", Toast.LENGTH_LONG).show();
	}

if the event method not exists @ activity java will throw an error


android:onClick="btnAdd_Click"

    <Button
        android:id="@+id/btn_add"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:onClick="btnAdd_Click"
        android:text="Button" />
        
        
//2nd
	public void btnAdd_Click(View v){
//		RelativeLayout button = (RelativeLayout) v;
				
		Intent myIntent;
		myIntent = new Intent().setClass(Competition_Details.this, Supporter_Details .class);
		myIntent.putExtra("itemKey", v.getTag().toString());
		startActivity(myIntent);
//		finish();
	}