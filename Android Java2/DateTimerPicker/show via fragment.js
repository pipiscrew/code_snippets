//requires android-support-v4.jar
//http://developer.android.com/guide/topics/ui/controls/pickers.html
//see example for time also

//main activity
<Button 
    android:layout_width="wrap_content" 
    android:layout_height="wrap_content"
    android:text="@string/pick_date" 
    android:onClick="showDatePickerDialog" />
    
public void showDatePickerDialog(View v) {
    DialogFragment newFragment = new DatePickerFragment();
    newFragment.show(getSupportFragmentManager(), "datePicker");
}

//OR with no extra lib required:
	public void showDatePickerDialog(View v) {
		FragmentTransaction ft = AutoMotoDetails.this.getFragmentManager().beginTransaction();
		DatePickerFragment newFragment = new DatePickerFragment();
		newFragment.show(ft, "dialog");
	}


//the fragment
import java.util.Calendar;

import android.app.DatePickerDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.os.Bundle;
import android.widget.DatePicker;

public class DatePickerFragment extends DialogFragment implements DatePickerDialog.OnDateSetListener {

	@Override
	public Dialog onCreateDialog(Bundle savedInstanceState) {
		// Use the current date as the default date in the picker
		final Calendar c = Calendar.getInstance();
		int year = c.get(Calendar.YEAR);
		int month = c.get(Calendar.MONTH);
		int day = c.get(Calendar.DAY_OF_MONTH);

		// Create a new instance of DatePickerDialog and return it
		return new DatePickerDialog(getActivity(), this, year, month, day);
	}

	public void onDateSet(DatePicker view, int year, int month, int day) {
		// Do something with the date chosen by the user
	}
}