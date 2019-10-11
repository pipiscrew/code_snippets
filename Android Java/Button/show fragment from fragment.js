		btn_date.setOnClickListener(new View.OnClickListener() {
		    @Override
		    public void onClick(View v) {
				FragmentTransaction ft = getFragmentManager().beginTransaction();
				DatePickerFragment newFragment = new DatePickerFragment();

				/////////////////////////////////////////////////////////////////////////////// Parse date from button text
				Date d = General.get_date_from_string(btn_date.getText().toString());
				Calendar cal = Calendar.getInstance();
				cal.setTime(d);
				int year = cal.get(Calendar.YEAR);
				int month = cal.get(Calendar.MONTH);
				int day = cal.get(Calendar.DAY_OF_MONTH);

				/////////////////////////////////////////////////////////////////////////////// Create a bundle
				Bundle currentDate = new Bundle();
				currentDate.putInt("y", year);
				currentDate.putInt("d", day);
				currentDate.putInt("m", month);

				/////////////////////////////////////////////////////////////////////////////// Set bundle to fragment
				newFragment.setArguments(currentDate);

				/////////////////////////////////////////////////////////////////////////////// Event listener user choice		
				newFragment.setListener(new DatePickerFragmentListener() {
					@Override
					public void datepicked(String user_date) {
						btn_date.setText(user_date);
					}

				});

				/////////////////////////////////////////////////////////////////////////////// Show fragment
				newFragment.show(ft, "dialog");
		    }
		});