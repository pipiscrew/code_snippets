	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		//table
		TableLayout tbl=new TableLayout(getBaseContext());
		tbl.setLayoutParams(new TableLayout.LayoutParams(TableLayout.LayoutParams.FILL_PARENT, TableLayout.LayoutParams.FILL_PARENT));
		
		//table row
		TableRow tr = new TableRow(getBaseContext());
	
		//textview
		   TextView tv1 = new TextView(this);
		    tv1.setText("test");
		    //this line said to strech the col! (aka 1f)
		    tv1.setLayoutParams(new TableRow.LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT, 1f)); 
		  //  tv1.setLayoutParams(new TableLayout.LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.WRAP_CONTENT));
		    tr.addView(tv1);
		    
		//Imagebutton
		ImageButton imgBUTT = new ImageButton(getBaseContext());
		try {
			
			imgBUTT.setImageDrawable(Drawable.createFromStream(getAssets().open("snap001.png"), null));

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		tr.addView(imgBUTT);
		
		tbl.addView(tr,new TableLayout.LayoutParams(
	                LayoutParams.FILL_PARENT,
	                LayoutParams.WRAP_CONTENT));
		
		 this.setContentView(tbl);