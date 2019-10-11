			// ScrollView
			ScrollView scrView = new ScrollView(getBaseContext());

			// LinearLaouyt
			LinearLayout ll = new LinearLayout(this);
			ll.setOrientation(LinearLayout.VERTICAL);
			scrView.addView(ll); //add to ScrollView

			// Gradient
			int colors[] = { 0, 0 };
			colors[0] = settings.barColor;
			colors[1] = settings.barColor + 20; //Color.WHITE;
			GradientDrawable g = new GradientDrawable(GradientDrawable.Orientation.TOP_BOTTOM, colors);

			// Textview
			TextView tx = new TextView(getBaseContext());
			tx.setEnabled(false);
			tx.setBackgroundDrawable(g);
			tx.setTypeface(null, Typeface.BOLD);
			tx.setTextSize(TypedValue.COMPLEX_UNIT_PX, 35);
			tx.setTextColor(settings.barTextColor);
			tx.setGravity(Gravity.CENTER);
			tx.setText(settings.title);
			//set height
			int dip = (int) (50 * getBaseContext().getResources().getDisplayMetrics().density + 0.5f);
			tx.setHeight(dip);
			ll.addView(tx); //add to LinearLayout

			// IMAGEVIEW
			ImageView img = new ImageView(getBaseContext());
			img.setImageBitmap(General.getBitmapFromExFile(General.appExPath(getBaseContext()) + "/" + settings.image));
			ll.addView(img); //add to LinearLayout

			// TABLE LAYOUT
			TableLayout tbl = new TableLayout(getBaseContext());
			tbl.setLayoutParams(new TableLayout.LayoutParams(TableLayout.LayoutParams.FILL_PARENT, TableLayout.LayoutParams.FILL_PARENT));

			// TABLE ROW
			TableRow tr;

			// TEXTVIEW will be used on te for loop
			TextView tv1;

			// IMAGE BUTTON will be used on te for loop
			ImageButton imgBUTT;

			for (int i = 0; i < settings.getJSONItems().size(); i++) {
				String[] arr = settings.getJSONItems().get(i).split("\\|");

				// instantiate table row
				tr = new TableRow(getBaseContext());

				// instantiate textview
				tv1 = new TextView(this);
				tv1.setText(Html.fromHtml(arr[2]));
				tv1.setTextColor(Color.BLACK);
				tv1.setPadding(10, 0, 0, 0);
				//use this to take all screen width
				tv1.setLayoutParams(new TableRow.LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT, 1f));

				tr.addView(tv1); //add to TABLE ROW

				// instantiate imagebutton
				imgBUTT = new ImageButton(getBaseContext());
				imgBUTT.setBackgroundDrawable(null); //transparent
				imgBUTT.setOnClickListener(new OnClickListener() {
					@Override
					public void onClick(View v) {

						String direction = (String) v.getTag();
						arrAction = direction.split("\\|");
						String msgHeader = "";

						if (direction == null)
							return;

						if (arrAction[0].equalsIgnoreCase("TEL"))
							msgHeader = "Call ?";
						else if (arrAction[0].equalsIgnoreCase("MAIL"))
							msgHeader = "Mail ?";
						else if (arrAction[0].equalsIgnoreCase("MAP"))
							msgHeader = "Open map ?";

						if (msgHeader.length() > 0) {
							AlertDialog myQuittingDialogBox =

							new AlertDialog.Builder(getParent())
							// set message, title, and icon
									.setTitle(msgHeader).setMessage(arrAction[1])
									// .setIcon(R.drawable.ic_menu_end_conversation)

									.setPositiveButton("Yes", new DialogInterface.OnClickListener() {
										public void onClick(DialogInterface dialog, int whichButton) {

											if (arrAction[0].equalsIgnoreCase("TEL")) {
												String number = "tel:" + arrAction[1];
												Intent callIntent = new Intent(Intent.ACTION_CALL, Uri.parse(number));
												startActivity(callIntent);
											} else if (arrAction[0].equalsIgnoreCase("MAIL")) {
												Intent i = new Intent(Intent.ACTION_SEND);
												i.setType("message/rfc822");
												i.putExtra(Intent.EXTRA_EMAIL, new String[] { arrAction[1] });
												i.putExtra(Intent.EXTRA_SUBJECT, "Android application");
												i.putExtra(Intent.EXTRA_TEXT, "");
												startActivity(Intent.createChooser(i, "Send mail..."));
											} else if (arrAction[0].equalsIgnoreCase("MAP")) {
												Intent browse = new Intent(Intent.ACTION_VIEW, Uri.parse(arrAction[1]));
												startActivity(browse);
											}

										}
									})// setPositiveButton
									.setNegativeButton("No", new DialogInterface.OnClickListener() {
										public void onClick(DialogInterface dialog, int whichButton) {
											// whatever should be done
											// when answering "NO" goes
											// here
										}
									})// setNegativeButton

									.create();

							myQuittingDialogBox.show();
						}
					}

				});

				//set image from assets
				imgBUTT.setImageDrawable(Drawable.createFromStream(getAssets().open("btnMap.png"), null));

				tr.addView(imgBUTT); //add to TABLE ROW

				//add TABLE ROW to *TABLE LAYOUT*
				tbl.addView(tr, new TableLayout.LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT));
			}

			// after the previous FOR loop there is the need to create dynamic buttons
			
			Button BUTT;
			for (int i = 0; i < settings.getJSONchildren().size(); i++) {
				// instantiate table row
				tr = new TableRow(getBaseContext());

				// instantiate button
				BUTT = new Button(getBaseContext());
				BUTT.setText(settings.JSONchildren.get(i).getTitle());
				BUTT.setTag(settings.JSONchildren.get(i));
				//use this to take all screen width
				BUTT.setLayoutParams(new TableRow.LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT, 1f));
				BUTT.setOnClickListener(new OnClickListener() {
					@Override
					public void onClick(View v) {
						Button b = (Button) v;

						tabVARSchildren detail = (tabVARSchildren) b.getTag();

						Intent intent = new Intent(getBaseContext(), StyleWEB.class);
						intent.putExtra("title", detail.getTitle());
						intent.putExtra("pageColor", detail.getPageColor());
						intent.putExtra("html", detail.getHtml());
						startActivity(intent);
					}
				});

				tr.addView(BUTT);//add to TABLE ROW
				
				//add TABLE ROW to *TABLE LAYOUT*
				tbl.addView(tr, new TableLayout.LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT));
			}

			//add *TABLE LAYOUT* to LinearLaouyt
			ll.addView(tbl);

			this.setContentView(scrView);

			//change view background color
			View view = this.getWindow().getDecorView();
			view.setBackgroundColor(settings.pageColor);