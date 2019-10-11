	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		// setContentView(R.layout.style_web);
		
			// ScrollView
			ScrollView scrView = new ScrollView(getBaseContext());
			
			// LinearLaouyt
			LinearLayout ll = new LinearLayout(this);
			ll.setOrientation(LinearLayout.VERTICAL);

			// Add LinearLayout to ScrollView
			scrView.addView(ll);
			
			// Create a gradient
			int colors[] = { 0, 0 };
			colors[0] = settings.barColor;
			colors[1] = settings.barColor + 20; //Color.WHITE;
			GradientDrawable g = new GradientDrawable(GradientDrawable.Orientation.TOP_BOTTOM, colors);
			
			// Create new TextView
			TextView tx = new TextView(getBaseContext()); 
			tx.setEnabled(false);
			tx.setBackgroundDrawable(g);
			tx.setTypeface(null, Typeface.BOLD);
			tx.setTextSize(TypedValue.COMPLEX_UNIT_PX, 35);
			tx.setTextColor(settings.barTextColor);
			tx.setGravity(Gravity.CENTER);
			tx.setText(settings.title);
			int dip = (int) (50 * getBaseContext().getResources().getDisplayMetrics().density + 0.5f);
			tx.setHeight(dip);
			ll.addView(tx);


			// Create Buttons			
			Button BUTT;
			int i;
			for (i = 0; i < settings.getJSONchildren().size(); i++) {
				BUTT = new Button(getBaseContext());
				BUTT.setText(settings.JSONchildren.get(i).getTitle());
				BUTT.setTag(settings.JSONchildren.get(i));
				BUTT.setLayoutParams(new TableRow.LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT, 1f));
				BUTT.setOnClickListener(new OnClickListener() {
					@Override
					public void onClick(View v) {
						//this method occurs on all buttons
						Button b = (Button) v;
						//each time cast the Button clicked and get the Tag property
						tabVARSchildren detail = (tabVARSchildren) b.getTag();
						//show the common intent and pass parameter to this
						Intent intent = new Intent(getBaseContext(), StyleWEB.class);
						intent.putExtra("title", detail.getTitle());
						intent.putExtra("pageColor", 0xffffffff);
						intent.putExtra("titlebarGradient", colors[0]);
						intent.putExtra("html", detail.getHtml());
						startActivity(intent);
					}
				});

				ll.addView(BUTT);

			}

			//set content			
			this.setContentView(scrView);
			
			//get the current view and adjust the background image!
			View view = this.getWindow().getDecorView();
			try {
				view.setBackgroundDrawable(Drawable.createFromStream(getAssets().open("activitybg.png"), null));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}