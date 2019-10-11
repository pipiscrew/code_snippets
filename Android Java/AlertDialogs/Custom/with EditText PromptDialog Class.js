//http://www.jjoe64.com/2011/06/prompt-dialog-for-android.html
//the call
	PromptDialog dlg = new PromptDialog(MainActivity.this, R.string.title, R.string.enter_comment) {
	 @Override
	 public boolean onOkClicked(String input) {
	  // do something
	  return true; // true = close dialog
	 }
	};
	dlg.show();


//the  class
	import android.app.AlertDialog;
	import android.content.Context;
	import android.content.DialogInterface;
	import android.content.DialogInterface.OnClickListener;
	import android.widget.EditText;
	
	/**
	 * helper for Prompt-Dialog creation
	 */
	public abstract class PromptDialog extends AlertDialog.Builder implements OnClickListener {
	 private final EditText input;
	
	 /**
	  * @param context
	  * @param title resource id
	  * @param message resource id
	  */
	 public PromptDialog(Context context, int title, int message) {
	  super(context);
	  setTitle(title);
	  setMessage(message);
	
	  input = new EditText(context);
	  setView(input);
	
	  setPositiveButton(R.string.ok, this);
	  setNegativeButton(R.string.cancel, this);
	 }
	
	 /**
	  * will be called when "cancel" pressed.
	  * closes the dialog.
	  * can be overridden.
	  * @param dialog
	  */
	 public void onCancelClicked(DialogInterface dialog) {
	  dialog.dismiss();
	 }
	
	 @Override
	 public void onClick(DialogInterface dialog, int which) {
	  if (which == DialogInterface.BUTTON_POSITIVE) {
	   if (onOkClicked(input.getText().toString())) {
	    dialog.dismiss();
	   }
	  } else {
	   onCancelClicked(dialog);
	  }
	 }
	
	 /**
	  * called when "ok" pressed.
	  * @param input
	  * @return true, if the dialog should be closed. false, if not.
	  */
	 abstract public boolean onOkClicked(String input);
	}
