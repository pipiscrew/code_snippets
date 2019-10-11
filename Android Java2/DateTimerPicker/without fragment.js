//http://webcache.googleusercontent.com/search?q=cache:q8x7-RawHQYJ:androidexample.com/In_this_example_creating_a_date_picker_to_pick_day__month_year_of_date/index.php%3Fview%3Darticle_discription%26aid%3D89%26aaid%3D113+&cd=8&hl=en&ct=clnk

    <Button
        android:id="@+id/btn_q"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/cmb_to"
        android:onClick="showDatePickerDialog"
        android:text="date" />
        
        
	static final int DATE_PICKER_ID = 1111;
	
	DatePickerDialog.OnDateSetListener pickerListener = new DatePickerDialog.OnDateSetListener() {

		@Override
		public void onDateSet(DatePicker view, int selectedYear, int selectedMonth, int selectedDay) {

			int year = selectedYear;
			int month = selectedMonth;
			int day = selectedDay;

			// Show selected date
			btn_dt.setText(new StringBuilder().append(day).append("/").append(month + 1).append("/").append(year));

		}

	};

	@SuppressWarnings("deprecation")
	public void showDatePickerDialog(View v) {
		showDialog(DATE_PICKER_ID);
	}

	@Override
	protected Dialog onCreateDialog(int id) {
		switch (id) {
		case DATE_PICKER_ID:
			final Calendar c = Calendar.getInstance();
			int year = c.get(Calendar.YEAR);
			int month = c.get(Calendar.MONTH);
			int day = c.get(Calendar.DAY_OF_MONTH);

			return new DatePickerDialog(this, pickerListener, year, month, day);
		}
		return null;
	}