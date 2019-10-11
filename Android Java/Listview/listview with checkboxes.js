//xml
            <ListView
                android:id="@+id/lstvCONTESTSCATEGORIES"
                android:layout_width="wrap_content"
                android:layout_height="200dp"
                android:layout_below="@id/tableRow5_USERPROFILE"
                android:layout_margin="5dip" />
                
                
//xml for row
			<?xml version="1.0" encoding="utf-8"?>
			<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
			    android:layout_width="match_parent"
			    android:layout_height="match_parent" >
			
			    <LinearLayout
			        android:layout_width="wrap_content"
			        android:layout_height="wrap_content"
			        android:baselineAligned="false"
			         android:layout_marginLeft="5dp"
			        android:orientation="horizontal" >
			
			        <ImageView
			            android:id="@+id/IMG_userProfile_ContestROW"
			            android:layout_width="40dp"
			            android:layout_height="40dp"
			            android:layout_marginRight="5dp"
			            android:scaleType="fitStart" />
			
			        <TextView
			            android:id="@+id/rowTitle_ContestROW"
			            android:layout_width="wrap_content"
			            android:layout_height="wrap_content"
			            android:textSize="15sp" />
			    </LinearLayout>
			
			    <CheckBox
			        android:id="@+id/chk_ContestROW"
			        android:layout_width="wrap_content"
			        android:layout_height="wrap_content"
			        android:layout_alignParentRight="true"
			        android:gravity="right" />
			
			</RelativeLayout>

//the class
package com.tc.contests;

//used by USERPROFILE lstvs

			public class Generic4lstv {
				public String imgURL;
				public String rowText;
				public String rowID;
				public Boolean isSelected;
				
				public String getRowID() {
					return rowID;
				}
			
				public void setRowID(String rowID) {
					this.rowID = rowID;
				}
			
				public String getImgURL() {
					return imgURL;
				}
			
				public void setImgURL(String imgURL) {
					this.imgURL = imgURL;
				}
			
				public String getRowText() {
					return rowText;
				}
			
				public void setRowText(String rowText) {
					this.rowText = rowText;
				}
			
				public Boolean getIsSelected() {
					return isSelected;
				}
			
				public void setIsSelected(Boolean isSelected) {
					this.isSelected = isSelected;
				}
			}
			
//java activity
			// Public declaration
			ListView lstv;
			User_Profile_ContestCatsAdapter listAdapter;
			List<Generic4lstv> rowItems = new ArrayList<Generic4lstv>();
			
			//user profile load only
			String ContestCAT;
			String causeCAT;
			
			protected void onCreate(Bundle savedInstanceState) {			
				lstv = (ListView) findViewById(R.id.lstvCONTESTSCATEGORIES);
				lstv.setOnItemClickListener(this);
				listAdapter = new User_Profile_ContestCatsAdapter(this, rowItems);
				lstv.setAdapter(listAdapter);
				
				//load user profile
				loadUserProfile();
				
				fillLSTV;
			}
			
			private void loadUserProfile()
			{
				SharedPreferences options = getSharedPreferences("userprofile", MODE_PRIVATE);
				ContestCAT =options.getString("CompCategories", "");
				causeCAT = options.getString("CauseCategories", "");
			}
			
			private void fillLSTV() {
				Generic4lstv rowItem;
		
				for (DataSnapshot child : snapshot.getChildren()) {
					rowItem = new Generic4lstv();
		
					String title = child.child("title").getValue().toString().trim();
		
					rowItem.setImgURL("to be fixed");
					rowItem.setRowText(title);
					rowItem.setRowID(child.getName());
					
					if (ContestCAT.indexOf(child.getName())>-1)
						rowItem.setIsSelected(true);
					else 
						rowItem.setIsSelected(false);
		
					rowItems.add(rowItem);
		
				}
		
				listAdapter.notifyDataSetChanged();
			}
			
			@Override
			public void onBackPressed() {
				//save on back
				String CompCategories="#";
				
				for(Generic4lstv item : rowItems ){
					if (item.getIsSelected())
						CompCategories+= item.getRowID() + "#";
				}
				
				SharedPreferences options = getSharedPreferences("userprofile", MODE_PRIVATE);
				SharedPreferences.Editor editor = options.edit();
				editor.putString("CompCategories", CompCategories);
				editor.commit();
		
				super.onBackPressed();
			}
			
//java listview adapter adapter
			import java.util.List;
			
			import android.app.Activity;
			import android.content.Context;
			import android.util.DisplayMetrics;
			import android.view.LayoutInflater;
			import android.view.View;
			import android.view.ViewGroup;
			import android.widget.BaseAdapter;
			import android.widget.CheckBox;
			import android.widget.CompoundButton;
			import android.widget.CompoundButton.OnCheckedChangeListener;
			import android.widget.ImageView;
			import android.widget.TextView;
			
			import com.squareup.picasso.Picasso;
			
			public class User_Profile_ContestCatsAdapter extends BaseAdapter {
			
				private List<Generic4lstv> data;
				private Activity context;
				
				public User_Profile_ContestCatsAdapter(Activity a, List<Generic4lstv> items) {
					this.context = a;
					this.data = items;
				}
				
				@Override
				public int getCount() {
					return data.size();
				}
			
				@Override
				public Object getItem(int position) {
					return data.get(position);
				}
			
				@Override
				public long getItemId(int position) {
					return position;
				}
			
			
				@Override
				public View getView(int position, View convertView, ViewGroup arg2) {
					LayoutInflater infalInflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
					convertView = infalInflater.inflate(R.layout.activity_user_profile_contest_categ_row, null);
			
					ViewHolder holder;
					holder = new ViewHolder();
					holder.rowText = (TextView) convertView.findViewById(R.id.rowTitle_ContestROW);
					holder.rowImage = (ImageView) convertView.findViewById(R.id.IMG_userProfile_ContestROW);
					holder.rowChk = (CheckBox) convertView.findViewById(R.id.chk_ContestROW);
					
					//http://stackoverflow.com/questions/12647001/listview-with-custom-adapter-containing-checkboxes
					holder.rowChk.setTag(Integer.valueOf(position)); //store the List<>position in TAG
					
					holder.rowChk.setOnCheckedChangeListener(new OnCheckedChangeListener(){
			
			            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
			            	data.get((Integer)buttonView.getTag()).setIsSelected(isChecked); //use of List<>position
			            }
			            
			        });
			        
					holder.rowText.setText(data.get(position).getRowText());
			
					if (data.get(position).getIsSelected())
						holder.rowChk.setChecked(true);
					else 
						holder.rowChk.setChecked(false);
		
					Picasso.with(context).load(picName).into(holder.rowImage);
				
					return convertView;
				}
				
				class ViewHolder {
					ImageView rowImage;
					TextView rowText;
					CheckBox rowChk;
				}
			}
