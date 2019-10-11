//showCustomDialog.java

package com.custom.dialog;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Gallery;
import android.view.WindowManager.LayoutParams;

public class CustomDialog extends Activity {
    /** Called when the activity is first created. */
 private Button show;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        show = new Button(this);
        show.setText("Click to view a Custom Dialog");
        /** Setting FILL_PARENT for the width and height of the button */
        show.setLayoutParams(new Gallery.LayoutParams(
    LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT));
        /** Without the layout xml we are going to add the button to the screen */
        setContentView(show);
        show.setOnClickListener(new View.OnClickListener() {
   
   @Override
   public void onClick(View v) {
    CustomizeDialog customizeDialog = new CustomizeDialog(CustomDialog.this);
    customizeDialog.show();
   }
  });
        
        
    }
}


//CustomizeDialog.java

package com.custom.dialog;

import android.app.Dialog;
import android.content.Context;
import android.view.View;
import android.view.Window;
import android.view.View.OnClickListener;
import android.widget.Button;

public class CustomizeDialog extends Dialog implements OnClickListener {
 Button close;

 public CustomizeDialog(Context context) {
  super(context);
  /** It will hide the title */
  requestWindowFeature(Window.FEATURE_NO_TITLE);  
  setContentView(R.layout.main);
  
  close = (Button) findViewById(R.id.close);
  close.setOnClickListener(this);
 }

 @Override
 public void onClick(View v) {  
  if (v == close)
   dismiss();
 }

}