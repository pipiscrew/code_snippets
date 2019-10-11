	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.style_web);
		
		  //http://stackoverflow.com/questions/4177401/gradientdrawable-in-code
	      int colors[] = { 0xff255779 , 0xff3e7492, 0xffa6c0cd };

	      GradientDrawable g = new GradientDrawable(GradientDrawable.Orientation.TOP_BOTTOM, colors);

	      TextView tx = (TextView) findViewById(R.id.txtTitle);
	      tx.setEnabled(false);
	      tx.setBackgroundDrawable(g);
	}