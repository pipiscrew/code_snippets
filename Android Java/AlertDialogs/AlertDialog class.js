//http://stackoverflow.com/questions/6836183/dismiss-alertdialog-builder-from-onclick
AlertDialog.Builder is best suited for small simple dialog 
boxes rather than custom dialogs.

The cleanest way to handle custom dialogs is to subclass AlertDialog
as a private static class in your context (in this case your activity).

Here is a simplified example:

public class AlertDialogTestActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);

        AlertDialog alert = new myCustomAlertDialog(this);
        alert.show();

    }

    private static class myCustomAlertDialog extends AlertDialog {

        protected myCustomAlertDialog(Context context) {
            super(context);

            setTitle("Profile");

            Button connect = new Button(getContext());
            setView(connect);
            connect.setText("Don't push me");
            connect.setOnClickListener(new View.OnClickListener() {

                public void onClick(View v) {
                    // I want the dialog to close at this point
                    dismiss();
                }
            });
        }

    }
}