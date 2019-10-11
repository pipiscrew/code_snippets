		Firebase dbCause = new Firebase(General.baseURL + "/causes/" + causeID);

		dbCause.addListenerForSingleValueEvent(new ValueEventListener() {

			@Override
			public void onCancelled() {
				// TODO Auto-generated method stub

			}

			@Override
			public void onDataChange(DataSnapshot arg0) {
				if (arg0 != null) {
					TextView tx = (TextView) findViewById(R.id.txtCAUSECAUSEdescrSmall);
					tx.setText(arg0.child("title").getValue().toString());

					WebView wbD = (WebView) findViewById(R.id.txtCAUSECAUSEdescrLarge);
					wbD.loadDataWithBaseURL(null, "<body style='margin:0;padding:0;'>" + arg0.child("descr").getValue().toString() + "</body>", "text/html", "UTF-8", null);

					// CAUSE COMPETITIONS COUNT
					if (arg0.child("competitions").getValue() != null) {
						tx = (TextView) findViewById(R.id.txtCAUSECAUSEcompLBL);
						tx.setText(String.valueOf(arg0.child("competitions").getChildrenCount()));
					}

					// CAUSE BIDS
					if (arg0.child("stats/entries").getValue() != null) {
						tx = (TextView) findViewById(R.id.txtCAUSECAUSEbidsLBL);
						tx.setText(arg0.child("stats/entries").getValue().toString());
					}

					// CAUSE MONEY
					if (arg0.child("stats/goal_now").getValue() != null) {
						tx = (TextView) findViewById(R.id.txtCAUSECAUSEmoneyLBL);
						tx.setText(arg0.child("stats/goal_now").getValue().toString());
					}
				}

			}

		});