//http://stackoverflow.com/questions/11433722/android-a-findviewbyid-method-that-returns-values-we-dont-need-to-cast
//http://biginteger.blogspot.jp/2011/04/better-findviewbyid-that-doesnt-require.html
//http://docs.oracle.com/javase/tutorial/extra/generics/methods.html
//
//another way is to use 120kb jar https://code.google.com/p/android-query/



//on public final class General {

//use for activities	
	/**
	 * Convenience method of findViewById
	 */
	@SuppressWarnings("unchecked")
	public static <T extends View> T getView(Activity activity, int id) {
	 return (T) activity.findViewById(id);
	}
	
	
//use for views
	/**
	 * Convenience method of findViewById
	 */
	@SuppressWarnings("unchecked")
	public static <T extends View> T getView(View parent, int id) {
	 return (T) parent.findViewById(id);
}


//@ activity
	EditText email = General.getView(this, R.id.txtEmail);
	
//before
//	EditText email = (EditText) findViewById(this, R.id.txtEmail);