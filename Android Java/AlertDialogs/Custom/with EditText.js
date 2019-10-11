//http://www.androidsnippets.com/prompt-user-input-with-an-alertdialog
	AlertDialog.Builder alert = new AlertDialog.Builder(this);
	
	alert.setTitle("Title");
	alert.setMessage("Message");
	
	// Set an EditText view to get user input 
	final EditText input = new EditText(this);
	alert.setView(input);
	
	alert.setPositiveButton("Ok", new DialogInterface.OnClickListener() {
	public void onClick(DialogInterface dialog, int whichButton) {
	  String value = input.getText().toString();
	  //if (input.getText().toString().toLowerCase().equalsIgnoreCase("delete"))
	  // Do something with value!
	  }
	});
	
	alert.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
	  public void onClick(DialogInterface dialog, int whichButton) {
	    // Canceled.
	  }
	});
	
	alert.show();
	
	
//inlined^
	new AlertDialog.Builder(Main.this)
	    .setTitle("Update Status")
	    .setMessage(message)
	    .setView(input)
	    .setPositiveButton("Ok", new DialogInterface.OnClickListener() {
	        public void onClick(DialogInterface dialog, int whichButton) {
	            Editable value = input.getText(); 
	        }
	    }).setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
	        public void onClick(DialogInterface dialog, int whichButton) {
	            // Do nothing.
	        }
	    }).show();