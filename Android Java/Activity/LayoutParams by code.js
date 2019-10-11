					ImageView img = new ImageView(getBaseContext());
					img.setScaleType(ImageView.ScaleType.FIT_START);
					
					LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
						     LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);

					params.setMargins(0, 5, 0, 5);
					
					//img.setLayoutParams(new LayoutParams(LayoutParams.WRAP_CONTENT, LayoutParams.WRAP_CONTENT));
					
					new DownloadImageTask((ImageView) img).execute("http://i.imgur.com/Dh6VcYt.png");

					//add image to tablerow
					tr.addView(img,params);