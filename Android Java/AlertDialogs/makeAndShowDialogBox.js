	public static AlertDialog makeAndShowDialogBox(Context ctx, String Title, String Message) {
		AlertDialog myQuittingDialogBox =

		new AlertDialog.Builder(ctx)
		// set message, title, and icon
				.setTitle(Title).setMessage(Message)
				// .setIcon(R.drawable.ic_menu_end_conversation)

				.setPositiveButton("Yes", new DialogInterface.OnClickListener() {
					public void onClick(DialogInterface dialog, int whichButton) {
						// whatever should be done when answering "YES" goes
						// here
					}
				})// setPositiveButton
				.setNegativeButton("No", new DialogInterface.OnClickListener() {
					public void onClick(DialogInterface dialog, int whichButton) {
						// whatever should be done when answering "NO" goes here
					}
				})// setNegativeButton

				.create();

		return myQuittingDialogBox;
	}