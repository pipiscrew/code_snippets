//http://stackoverflow.com/questions/2461824/how-to-programmatically-set-maxlength-in-android-textview

		txtTitle = new EditText(this);
		txtTitle.setText(getShareViaMessageTW());
		txtTitle.setFilters( new InputFilter[] { new InputFilter.LengthFilter(140) } ); 
		
		
//or XML
android:inputType="textNoSuggestions|textVisiblePassword"
android:maxLength="6"