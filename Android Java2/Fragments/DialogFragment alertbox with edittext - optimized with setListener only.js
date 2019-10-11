//activity

						FragmentTransaction ft = MainActivity2.this.getFragmentManager().beginTransaction();

						InputDialog newFragment = InputDialog.newInstance("Email registration", "θα θέλαμε να ξέρουμε το email σας, όταν κερδίσετε θα σας ενημερώσουμε σε αυτό!");

						newFragment.setCancelable(false);

						newFragment.setListener(new InputDialogListener() {

							@Override
							public void InputDialog_OK(String email) {
								if (!General.isConnected) {
									General.mes(MainActivity2.this, "Δεν είστε συνδεδεμένοι!");
									finish();
								} else {
									if (General.checkNetworkConnection(MainActivity2.this, true)) {
										Firebase dN = new Firebase(General.baseURL + "/people/" + General.userID);
										dN.child("mail").setValue(email);
									} else
										finish();

								}
							}

						});

						newFragment.show(ft, "dialog");
						

//fragment
package com.tc.contests;

import java.util.EventListener;

import com.firebase.client.Firebase;
import com.tc.contests.CustomHttpTask.IAsyncFetchListener;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class InputDialog extends DialogFragment  {

	// https://github.com/thecodepath/android_guides/wiki/Using-DialogFragment
	// http://developer.android.com/reference/android/app/DialogFragment.html
	// http://developer.android.com/guide/topics/ui/dialogs.html
	// http://stackoverflow.com/questions/12062946/why-do-i-want-to-avoid-non-default-constructors-in-fragments
	// http://www.androiddesignpatterns.com/2012/05/using-newinstance-to-instantiate.html

	private String title;
	private String message;

	public interface InputDialogListener extends EventListener {
		public void InputDialog_OK(String email);
	}

	public void setListener(InputDialogListener listener) {
		this.listener = listener;
	}
	
	// Used to communicate the result back to the Activity
	private InputDialogListener listener;

	private EditText txtInput;

	public static final InputDialog newInstance(String title, String message) {
		InputDialog fragment = new InputDialog();
		Bundle bundle = new Bundle(2);
		bundle.putString("title", title);
		bundle.putString("message", message);
		fragment.setArguments(bundle);
		return fragment;
	}

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		title = getArguments().getString("title");
		message = getArguments().getString("message");
	}

	@Override
	public void onStart() {
		super.onStart(); // super.onStart() is where dialog.show() is actually
							// called on the underlying dialog, so we have to do
							// it after this point
		AlertDialog d = (AlertDialog) getDialog();
		if (d != null) {
			Button positiveButton = (Button) d.getButton(Dialog.BUTTON_POSITIVE);
			positiveButton.setOnClickListener(new View.OnClickListener() {
				@Override
				public void onClick(View v) {
					if (General.isValidEmail(txtInput.getText().toString()))
					{	
						listener.InputDialog_OK(txtInput.getText().toString());
						dismiss();
					}
				}
			});
		}
	}

	//dialogfragment *trick* dont close when button clicked
	//http://stackoverflow.com/questions/2620444/how-to-prevent-a-dialog-from-closing-when-a-button-is-clicked
	//otherwise only @ onCreateDialog del onStart
	
	@Override
	public Dialog onCreateDialog(Bundle savedInstanceState) {
		txtInput = new EditText(getActivity());
		// txtInput.setTag("userinput");
		AlertDialog.Builder builder = new AlertDialog.Builder(getActivity());
		builder.setView(txtInput);
		builder.setTitle(title);
		builder.setMessage(message);
		builder.setPositiveButton("αποδοχή", new DialogInterface.OnClickListener() {
			@Override
			public void onClick(DialogInterface dialog, int which) {
			}
		});
		return builder.create();
	}


}
