//http://stackoverflow.com/questions/10903754/input-text-dialog-android

//Within your class:

private String m_Text = "";
//Within the OnClickListener of your button (or in a function called from there):

AlertDialog.Builder builder = new AlertDialog.Builder(this);
builder.setTitle("Title");

// Set up the input
final EditText input = new EditText(this);
// Specify the type of input expected; this, for example, sets the input as a password, and will mask the text
input.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_PASSWORD);
builder.setView(input);

// Set up the buttons
builder.setPositiveButton("OK", new DialogInterface.OnClickListener() { 
    @Override
    public void onClick(DialogInterface dialog, int which) {
        m_Text = input.getText().toString();
    }
});
builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialog, int which) {
        dialog.cancel();
    }
});

builder.show();