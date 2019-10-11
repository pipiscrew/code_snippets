//with image from resources
				for (DataSnapshot child : snapshot.getChildren()) {
					Button imgBUTT = new Button(MainActivity2.this);

					imgBUTT.setBackground(getResources().getDrawable(R.drawable.categorybutton));

					imgBUTT.setLayoutParams(new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
					imgBUTT.setText(child.child("title").getValue().toString());
					imgBUTT.setTag(child.getRef().getName()); //set ID to tag
					
					//event onClick
					imgBUTT.setOnClickListener(handleOnClick(imgBUTT));
					
					LinearLayout hz = (LinearLayout) findViewById(R.id.directchild);
					hz.addView(imgBUTT);
				}
				
//http://stackoverflow.com/questions/4401028/dynamically-creating-buttons-and-setting-onclicklistener
				//event!
				View.OnClickListener handleOnClick(final Button button) {
				    return new View.OnClickListener() {
				        public void onClick(View v) {
				        	 Button button = (Button)v;
				        	    Toast.makeText(getApplicationContext(), button.getTag().toString().toString(),2).show(); 
				        }
				    };
				}
				
//

package com.example.testtab;

import java.io.IOException;

import android.app.Activity;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.GradientDrawable;
import android.os.Bundle;
import android.support.v4.view.ViewPager.LayoutParams;
import android.text.Html;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.webkit.WebView;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TableLayout;
import android.widget.TableRow;
import android.widget.TextView;


public class Contact extends Activity {

	//class
		JSONParser cm = null;
		
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
	//	setContentView(R.layout.style_web);


		/////////////////////////////////////////////////////////////////
		cm = JSONParser.getCommonMethods();
		if (cm == null)
		{
			JSONParser.setCommonMethods();
			cm = JSONParser.getCommonMethods();
		}
		/////////////////////////////////////////////////////////////////	 

		tabVARS settings =  cm.ReadJSON(getBaseContext(), 4,General.tabType.Contact);

		if (settings!=null)
		{
			//ScrollView
			ScrollView scrView = new ScrollView(getBaseContext());

			//LinearLaouyt
			LinearLayout ll = new LinearLayout(this);
			ll.setOrientation(LinearLayout.VERTICAL);
			scrView.addView(ll);

			//TOPBAR textview Gradient
			int colors[] = { 0 , 0 };
			colors[0]=settings.barColor;
			colors[1]=Color.WHITE;
			GradientDrawable g = new GradientDrawable(GradientDrawable.Orientation.TOP_BOTTOM,colors );

			//TOPBAR textview appearance + TITLE 
			TextView tx = new TextView(getBaseContext()); //(TextView) findViewById(R.id.txtTitle);
			tx.setEnabled(false);
			tx.setBackgroundDrawable(g);
			tx.setTypeface(null, Typeface.BOLD);
			tx.setTextSize(TypedValue.COMPLEX_UNIT_PX, 35);
			tx.setTextColor(settings.barTextColor); 
			//or setTextColor(Color.RED);
			tx.setGravity(Gravity.CENTER_HORIZONTAL);
			tx.setText(settings.title);
			int dip = (int) (50 * getBaseContext().getResources().getDisplayMetrics().density + 0.5f);
			tx.setHeight(dip);
			ll.addView(tx);
			//--------------- [DYNAMIC LAYOUT]
			
			//IMAGEVIEW
			ImageView img = new ImageView(getBaseContext());
			img.setImageBitmap(General.getBitmapFromExFile(General.appExPath(getBaseContext()) + "/" + settings.image));
			ll.addView(img);
			
			//TABLE LAYOUT
			TableLayout tbl=new TableLayout(getBaseContext());
			tbl.setLayoutParams(new TableLayout.LayoutParams(TableLayout.LayoutParams.FILL_PARENT, TableLayout.LayoutParams.FILL_PARENT));
			
			//TABLE ROW
			TableRow tr; 
			
			//TEXTVIEW
			TextView tv1;
					
			//IMAGE BUTTON
			ImageButton imgBUTT;
			
			for (int i = 0; i < settings.getJSONItems().size(); i++) {
				String[] arr = settings.getJSONItems().get(i).split("\\|");
				
				//instantiate table row
				tr = new TableRow(getBaseContext());
				
				//instantiate textview
			    tv1 = new TextView(this);
			    tv1.setText(Html.fromHtml(arr[2]));
			    tv1.setTextColor(Color.BLACK);
			    tv1.setLayoutParams(new TableRow.LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT, 1f));
			    //--------------add to TABLE ROW
			    tr.addView(tv1);
			    
			    //instantiate imagebutton
				imgBUTT = new ImageButton(getBaseContext());
					
				try {
					
					if (arr[0].equalsIgnoreCase("MAP"))
						imgBUTT.setImageDrawable(Drawable.createFromStream(getAssets().open("btnMap.png"), null));
					else if (arr[0].equalsIgnoreCase("TEL"))
						imgBUTT.setImageDrawable(Drawable.createFromStream(getAssets().open("btnCall.png"), null));
					else 					if (arr[0].equalsIgnoreCase("MAIL"))
						imgBUTT.setImageDrawable(Drawable.createFromStream(getAssets().open("btnEmail.png"), null));
					

					
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				//--------------add to TABLE ROW
				tr.addView(imgBUTT);
				
				tbl.addView(tr,new TableLayout.LayoutParams(
		                LayoutParams.FILL_PARENT,
		                LayoutParams.WRAP_CONTENT));
			}

			ll.addView(tbl);
			//View v = new View(getBaseContext());
		    this.setContentView(scrView);
	
		    View view = this.getWindow().getDecorView();
		    view.setBackgroundColor(settings.pageColor);
		    
		    
		}
		else
		{
			//webview HTML
			WebView wb = (WebView) findViewById(R.id.webView1);
			wb.loadData("<b>Internal error!</b>", "text/html", null);
		}

	}   
	
}
