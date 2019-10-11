'read only non focusable
add(new RichTextField("Hello World!",  Field.NON_FOCUSABLE));

'read textbox from textbox
String id = identifierfield.getText();

'write to textbox
identifierfield.setText("");

'validation about length
if (id.trim().length() == 0 || data.trim().length() == 0)
{
	Dialog.alert("Please fill in all fields.");identifierfield.setFocus();return;
}

