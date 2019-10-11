//http://stackoverflow.com/questions/1776552/android-how-to-get-selected-item-from-data-driven-spinner
	public Cursor productsCursor() {
		Cursor c = database
				.rawQuery("select TgUniqueField as [_id],Name as [Name] from products",	null); 
		return c;
	}
	
	private void fillSpin() {
		Cursor model = CustomersDB.productsCursor();
		model.moveToFirst();

		SimpleCursorAdapter ModelAdapter = new SimpleCursorAdapter(this, android.R.layout.simple_spinner_item, model, new String[] { "Name" }, new int[] { android.R.id.text1 });
		ModelAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
		txtCustomer_country_id.setAdapter(ModelAdapter);
	}
	
	
//obtain the ID
			String spinnerString = null;
			Cursor cc = (Cursor) (txtCustomer_country_id.getSelectedItem());
			if (cc != null) {
				spinnerString = cc.getString(cc.getColumnIndex("_id"));

				CatchError(spinnerString);
			}
			
//or use the function

	public static long getSpinnerRecordID(Spinner spnr)
	{
		Cursor c = (Cursor) (spnr.getSelectedItem());
		if (c != null) 
			return c.getLong(c.getColumnIndex("_id"));
		else
			return 0;
	}
