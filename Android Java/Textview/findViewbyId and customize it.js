		int colors[] = { 0xff255779 , 0xff3e7492, 0xffa6c0cd };

		TextView tx = (TextView) findViewById(R.id.txtTitle);

		//colors[1] = Color.WHITE;
		GradientDrawable g = new GradientDrawable(GradientDrawable.Orientation.TOP_BOTTOM, colors);

		// TOPBAR textview appearance + TITLE
		tx.setEnabled(false);
		tx.setBackgroundDrawable(g);
		tx.setTypeface(null, Typeface.BOLD);
		tx.setTextSize(TypedValue.COMPLEX_UNIT_PX, 35);
		tx.setTextColor(Color.WHITE);
		tx.setText(title);