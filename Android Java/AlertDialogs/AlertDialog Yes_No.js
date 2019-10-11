			AlertDialog myQuittingDialogBox =

			new AlertDialog.Builder(getParent())
			// set message, title, and icon
					.setTitle(msgHeader).setMessage(arrAction[1])
					// .setIcon(R.drawable.ic_menu_end_conversation)

					.setPositiveButton("Yes", new DialogInterface.OnClickListener() {
						public void onClick(DialogInterface dialog, int whichButton) {
							// whatever should be done
							// when answering "YES" goes
							// here
						}
					})// setPositiveButton
					.setNegativeButton("No", new DialogInterface.OnClickListener() {
						public void onClick(DialogInterface dialog, int whichButton) {
							// whatever should be done
							// when answering "NO" goes
							// here
						}
					})// setNegativeButton

					.create();

			myQuittingDialogBox.show();