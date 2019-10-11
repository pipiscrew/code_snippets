//http://stackoverflow.com/questions/6147884/onactivityresult-not-being-called-in-fragment
//http://stackoverflow.com/questions/7262405/handling-onactivityresult-in-android-app-having-more-than-one-activity


//parent
	//startActivity ex. from listview item click
					@Override
					public void onItemClick(AdapterView<?> arg0, View arg1, int arg2, long arg3) {
						Intent myIntent;
						myIntent = new Intent().setClass(getActivity(), Competition_Details.class);
						myIntent.putExtra("itemKey", rowItems.get(arg2).getkey());
						myIntent.putExtra("itemArrayPosition", arg2);
						
						//
						startActivityForResult(myIntent, 0);
					}

					//can has multiple results, on startActivityForResult we set something like ID
					@Override
					public void onActivityResult(int requestCode, int resultCode, Intent data)
					{
						//always super, working also on fragments!
					    super.onActivityResult(requestCode, resultCode, data);
					    
					    switch(requestCode){
					        case 0: //the 0 activity
					           if(resultCode == Activity.RESULT_OK) //is the result is OK
					        	   {
					        	   		int pos = data.getIntExtra ("compID", -1); //read the bundle
					        	   		if (pos!=-1)
					        	   		{
					        	   			rowItems.remove(pos);
					        	   			listAdapter.notifyDataSetChanged();
					        	   		}
					        	   }
					           break;
					    }
					}
	
//child
					Intent intent = new Intent ();
					intent.putExtra ("compID", itemArrayPosition);
					setResult(Activity.RESULT_OK, intent);
					finish();
					
