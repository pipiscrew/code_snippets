					LinearLayout hz = (LinearLayout) findViewById(R.id.causesHZScrollByCause);

					Button btnText = new Button(ListByCauses.this);
					String title = child.child("title").getValue().toString().trim();


					btnText.setBackground(getResources().getDrawable(R.drawable.category_button_bg));
					//btnText.setLayoutParams(new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
					
					LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);
					lp.setMargins(2, 0, 2, 0);
					btnText.setLayoutParams(lp);
					
					// the real button
					btnText.setText(title);
					btnText.setTag(child.getRef().getName()); // set ID to tag
					btnText.setTextColor(Color.WHITE);
					
					// event onClick
					//btnText.setOnClickListener(handleCategoryOnClick(btnText));


					hz.addView(btnText);