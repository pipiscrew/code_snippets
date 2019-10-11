//http://android-codes-examples.blogspot.com.au/2011/04/animated-customized-popup-transparent.html

//button_bar_gradient.xml
//For giving gradient effect we need to use this xml file as the background for the linearlayout or button. The xml file is
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android">
<gradient  android:startColor="#C0C0C0"
   android:endColor="#505050"
            android:angle="90"/>  
   <corners android:radius="2px" />
</shape>

//AnimatePopup.java
//Customized Popup is the com.popup.design.layers.TransparentPanel, initially we will
//hide this layout, and on the button click will show this layout. The java code is as follows
package com.popup.design;

import com.popup.design.layers.TransparentPanel;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.TextView;

public class AnimatePopup extends Activity {

private Animation animShow, animHide;

@Override
public void onCreate(Bundle icicle) {
   
       super.onCreate(icicle);

       setContentView(R.layout.popup);
   
       initPopup();
   }
  
   private void initPopup() {
   
    final TransparentPanel popup = (TransparentPanel) findViewById(R.id.popup_window);

    //  Start out with the popup initially hidden.
    popup.setVisibility(View.GONE);
   
   
    animShow = AnimationUtils.loadAnimation( this, R.anim.popup_show);
    animHide = AnimationUtils.loadAnimation( this, R.anim.popup_hide);
   
    final Button   showButton = (Button) findViewById(R.id.show_popup_button);
    final Button   hideButton = (Button) findViewById(R.id.hide_popup_button);
    showButton.setOnClickListener(new View.OnClickListener() {
  public void onClick(View view) {
   popup.setVisibility(View.VISIBLE);
   popup.startAnimation( animShow );
   showButton.setEnabled(false);
   hideButton.setEnabled(true);
       }});
      
       hideButton.setOnClickListener(new View.OnClickListener() {
  public void onClick(View view) {
   popup.startAnimation( animHide );
   showButton.setEnabled(true);
   hideButton.setEnabled(false);
   popup.setVisibility(View.GONE);
       }});


    final TextView locationName = (TextView) findViewById(R.id.location_name);
       final TextView locationDescription = (TextView) findViewById(R.id.location_description);
      
       locationName.setText("Animated Popup");
       locationDescription.setText("Animated popup is created by http://www.android-codes-examples.blogspot.com/"
              + " Transparent layout is used on this example, and animation xml is also used"
              + " on this example. Have a Good day guys.");
}
}

//popup.xml
//We need to use this transparentPanel class in the xml file, where we need the transparent
//layout, in the popup.xml we are using the com.popup.design.layers.TransparentPanel 
//instead of LinearLayout, see in the code
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
android:orientation="vertical"
android:background="@drawable/white"
android:layout_width="fill_parent" android:layout_height="fill_parent">

<Button android:id="@+id/show_popup_button" android:layout_gravity="bottom"
 android:layout_width="wrap_content" android:layout_height="wrap_content"
 android:layout_marginBottom="25px" android:text="Show Popup" />

<com.popup.design.layers.TransparentPanel
 android:id="@+id/popup_window" android:layout_width="fill_parent"
 android:layout_height="wrap_content" android:orientation="vertical"
 android:layout_gravity="bottom" android:gravity="left" android:padding="1px"
 android:background="@drawable/white">

 <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
  android:orientation="vertical" android:gravity="right"
  android:layout_width="fill_parent" android:layout_height="fill_parent"
  android:background="@drawable/button_bar_gradient">

  <Button android:id="@+id/hide_popup_button"
   android:layout_width="wrap_content" android:layout_height="wrap_content"
   android:layout_alignParentRight="true" android:layout_marginTop="5px"
   android:layout_marginRight="10px" android:paddingLeft="5px"
   android:paddingRight="5px" style="?android:attr/buttonStyleSmall"
   android:textStyle="bold" android:textColor="@drawable/white"
   android:textSize="12px" android:text="  Close  " android:background="@drawable/button_close"/>

  <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
   android:orientation="vertical" android:layout_width="fill_parent"
   android:layout_height="1px" android:layout_marginTop="5px"
   android:layout_below="@+id/hide_popup_button" android:background="@drawable/white" />
 </RelativeLayout>

 <TextView android:id="@+id/location_name"
  android:layout_width="wrap_content" android:layout_height="wrap_content"
  android:textStyle="bold" android:textSize="16px" android:textColor="@drawable/white"
  android:layout_marginTop="5px" android:layout_marginLeft="5px" />

 <TextView android:id="@+id/location_description"
  android:layout_width="wrap_content" android:layout_height="wrap_content"
  android:textColor="@drawable/white" android:layout_margin="5px" />

</com.popup.design.layers.TransparentPanel>

</FrameLayout>


//TransparentPanel.java Class
package com.popup.design.layers;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RectF;
import android.graphics.Paint.Style;
import android.util.AttributeSet;
import android.widget.LinearLayout;

public class TransparentPanel extends LinearLayout
{
private Paint innerPaint, borderPaint ;
  
public TransparentPanel(Context context, AttributeSet attrs) {
 super(context, attrs);
 init();
}

public TransparentPanel(Context context) {
 super(context);
 init();
}

private void init() {
 innerPaint = new Paint();
 innerPaint.setARGB(225, 0, 0, 0);
 innerPaint.setAntiAlias(true);

 borderPaint = new Paint();
 borderPaint.setARGB(255, 0, 0, 0);
 borderPaint.setAntiAlias(true);
 borderPaint.setStyle(Style.STROKE);
 borderPaint.setStrokeWidth(2);
}

public void setInnerPaint(Paint innerPaint) {
 this.innerPaint = innerPaint;
}

public void setBorderPaint(Paint borderPaint) {
 this.borderPaint = borderPaint;
}

   @Override
   protected void dispatchDraw(Canvas canvas) {
   
    RectF drawRect = new RectF();
    drawRect.set(0,0, getMeasuredWidth(), getMeasuredHeight());
   
    canvas.drawRoundRect(drawRect, 5, 5, innerPaint);
 canvas.drawRoundRect(drawRect, 5, 5, borderPaint);

 super.dispatchDraw(canvas);
   }
}