	public static void CatchError(Context cx, String Exception)
	{
		Dialog diag=new Dialog(cx);
		diag.setTitle("Error!");
		TextView txt=new TextView(cx);
		txt.setText(Exception);
		diag.setContentView(txt);
		diag.show();
	}