		Button bt;
		bt=(Button)findViewById(R.id.button1);
		bt.setText("dfgdf");
		bt.setOnClickListener(new OnClickListener() {
	           @Override
	           public void onClick(View v) {
	        	   
	        	//toast text 
	            Toast.makeText(MainActivity.this, "Hello World", Toast.LENGTH_SHORT).show();
	            
	            //change textview text
	            TextView tv;
	            tv = (TextView)findViewById(R.id.textView1);
	            tv.setText("koala");
	           }
	         });  