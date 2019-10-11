		
		ImageView FBimage=new ImageView(this);
		FBimage.setImageResource(R.drawable.facebook_square);
		
		//FB imageview click
		FBimage.setOnClickListener(new View.OnClickListener() {
		    @Override
		    public void onClick(View v) {
		        Toast.makeText(MainActivity.this,
		                "Facebook clicked!",
		                Toast.LENGTH_LONG).show();
		    }
		});
		
		//declare the images will appear
		ImageView TWimage=new ImageView(this);
		TWimage.setImageResource(R.drawable.twitter_square);
		
		//TW imageview click
		TWimage.setOnClickListener(new View.OnClickListener() {
		    @Override
		    public void onClick(View v) {
		        Toast.makeText(MainActivity.this,
		                "Twitter clicked!",
		                Toast.LENGTH_LONG).show();
		    }
		});
		
		
		
		//create a LinearLayout (will be the parent for images)
		LinearLayout imageLayout = new LinearLayout(this);
		
		//set LinearLayout orientation
		imageLayout.setOrientation(LinearLayout.HORIZONTAL);
		
		//set LinearLayout gravity
		imageLayout.setGravity(Gravity.CENTER_HORIZONTAL);
		
		//set LinearLayout padding
		imageLayout.setPadding(0, 0, 0, 20);
		
		//construct LinearLayout.LayoutParams, set the margins to images!
		LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);
		layoutParams.setMargins(0, 0, 10, 20);
		
		imageLayout.addView(FBimage, layoutParams);
		imageLayout.addView(TWimage, layoutParams);
		
		//construct the alertdialog		
		AlertDialog d =  new AlertDialog.Builder(this).setTitle("Share bid via :").setMessage("facebook or twitter").setView(imageLayout)
			.setNegativeButton("cancel", new DialogInterface.OnClickListener() {
			public void onClick(DialogInterface dialog, int whichButton) {
				
			}
		}).create();
		
		d.show();