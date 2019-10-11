import java.util.ArrayList;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.Spinner;

public class MainActivity extends Activity {

	ArrayList<item> items = new ArrayList<item>();
	Spinner cmb_from = null;
	Spinner cmb_to = null;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		cmb_from=(Spinner) findViewById(R.id.cmb_from);
		cmb_to=(Spinner) findViewById(R.id.cmb_to);
		
		items.add(new item("1","title1"));
		items.add(new item("2","title2"));
		
		ArrayAdapter<item> spinnerArrayAdapter = new ArrayAdapter<item>(MainActivity.this, android.R.layout.simple_spinner_item, items);
		spinnerArrayAdapter.setDropDownViewResource( android.R.layout.simple_spinner_dropdown_item );


		cmb_from.setAdapter(spinnerArrayAdapter);
		
		cmb_from.setOnItemSelectedListener(new OnItemSelectedListener() {
			@Override
			public void onItemSelected(AdapterView<?> parentView, View selectedItemView, int position, long id) {
				Log.w("ww",items.get(position).getId());
			}

			@Override
			public void onNothingSelected(AdapterView<?> arg0) {
			
			}

			});
		
		
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}


//the class
public class item {
	private String title;
	private String id;

	public item() {
		super();
	}

	public item(String id, String title) {
		super();
		this.id = id;
		this.title = title;
	}
	
//required
	@Override
	public String toString() {
		return this.title;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	

}

//xml
    
    <Spinner
        android:id="@+id/cmb_from"
        android:layout_below="@id/txt_from"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:drawSelectorOnTop="true" />
        
        


///////////increase the fontsize only by creating new XML
//http://www.broculos.net/2013/09/how-to-change-spinner-text-size-color.html#.U-ZU0-zx30d

layout/spinner_item.xml
	<?xml version="1.0" encoding="utf-8"?>
	<TextView xmlns:android="http://schemas.android.com/apk/res/android"
	    android:id="@android:id/text1"
	    android:layout_width="match_parent"
	    android:layout_height="wrap_content"
	    android:textSize="20sp"
	    android:textColor="#ff0000" />
		    
layout/spinner_dropdown_item.xml
	<?xml version="1.0" encoding="utf-8"?>
	<CheckedTextView xmlns:android="http://schemas.android.com/apk/res/android"
	    android:id="@android:id/text1"
	    style="?android:attr/spinnerDropDownItemStyle"
	    android:singleLine="true"
	    android:layout_width="match_parent"
	    android:layout_height="?android:attr/listPreferredItemHeight"
	    android:ellipsize="marquee"
	    android:textColor="#aa66cc"/>
	    
replace source line30+31 with : 
		ArrayAdapter<item> spinnerArrayAdapter = new ArrayAdapter<item>(MainActivity.this, R.layout.spinner_item, items);
		spinnerArrayAdapter.setDropDownViewResource(R.layout.spinner_dropdown_item);