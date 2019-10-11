//http://www.ezzylearning.com/tutorial.aspx?tid=1351248
//http://stackoverflow.com/questions/12188980/set-selected-item-of-listview-alert-dialog
			// setup AlertDialog
			AlertDialog.Builder builder = new AlertDialog.Builder(this);
			builder.setTitle("Επιλέξτε σκοπό");

			// setup ok button on dialog
			builder.setPositiveButton("ok",
					new DialogInterface.OnClickListener() {
						public void onClick(DialogInterface dialog,	int whichButton) {
							// todo
						}
					});

			// our records
			final CauseItem[] items = { new CauseItem("1", "Milk"),
					new CauseItem("2", "Butter"), new CauseItem("3", "Yogurt"),
					new CauseItem("4", "Toothpaste"),
					new CauseItem("5", "Ice Cream") };

			// our ArrayAdapter
			ArrayAdapter<CauseItem> adapter = new ArrayAdapter<CauseItem>(this,
					android.R.layout.simple_list_item_single_choice, items);
			
			
			//setSingleChoiceItems - no listview needed - 3 is the 3rd item in the CauseItem[]
			builder.setSingleChoiceItems(adapter, 3, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface dialog, int which) {
                	Toast.makeText(getBaseContext(),items[which].toString(), Toast.LENGTH_LONG).show();
                	//  dialog.cancel();
                }
            });

			final Dialog dialog = builder.create();

			dialog.show();
			
			
//the class
public class CauseItem {
	private String id;
	private String name;

	public CauseItem() {
		super();
	}

	public CauseItem(String id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	@Override
	public String toString() {
		return this.name;
	}

	public String getID() {
		return this.id;
	}
}
