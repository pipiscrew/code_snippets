//use on main activity
//////////////////////
public class listnotes extends BaseActivity {
}

//AndroidManifest.xml
////////////////////
        <activity
                android:name="com.example.pipiscrewnotes.CrashActivity"
                android:label="Crash" >
        </activity>
        
//BaseActivity.java
////////////////////
package com.example.pipiscrewnotes;

import android.app.Activity;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;

public class BaseActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Thread.setDefaultUncaughtExceptionHandler(new Thread.UncaughtExceptionHandler() {
            @Override
            public void uncaughtException(Thread paramThread, Throwable e) {

                final String DOUBLE_LINE_SEP = "\r\n\r\n";
                final String SINGLE_LINE_SEP = "\r\n";
                StackTraceElement[] arr = e.getStackTrace();
                final StringBuffer report = new StringBuffer(e.toString());
                final String lineSeperator = "-------------------------------\n\n";
                report.append(DOUBLE_LINE_SEP);
                report.append("--------- Stack trace ---------\n\n");
                for (int i = 0; i < arr.length; i++) {
                    report.append("    ");
                    report.append(arr[i].toString());
                    report.append(SINGLE_LINE_SEP);
                }

                // If the exception was thrown in a background thread inside
                // AsyncTask, then the actual exception can be found with getCause
                Throwable cause = e.getCause();
                if (cause != null) {
                    report.append(lineSeperator);
                    report.append("--------- Cause ---------\n\n");
                    report.append(cause.toString());
                    report.append(DOUBLE_LINE_SEP);
                    arr = cause.getStackTrace();
                    for (int i = 0; i < arr.length; i++) {
                        report.append("    ");
                        report.append(arr[i].toString());
                        report.append(SINGLE_LINE_SEP);
                    }
                }
                // Getting the Device brand,model and sdk verion details.
                report.append(lineSeperator);
                report.append("--------- Device ---------\n\n");
                report.append("Brand: ");
                report.append(Build.BRAND);
                report.append(SINGLE_LINE_SEP);
                report.append("Device: ");
                report.append(Build.DEVICE);
                report.append(SINGLE_LINE_SEP);
                report.append("Model: ");
                report.append(Build.MODEL);
                report.append(SINGLE_LINE_SEP);
                report.append("Id: ");
                report.append(Build.ID);
                report.append(SINGLE_LINE_SEP);
                report.append("Product: ");
                report.append(Build.PRODUCT);
                report.append(SINGLE_LINE_SEP);
                report.append(lineSeperator);
                report.append("--------- Firmware ---------\n\n");
                report.append("SDK: ");
                report.append(Build.VERSION.SDK);
                report.append(SINGLE_LINE_SEP);
                report.append("Release: ");
                report.append(Build.VERSION.RELEASE);
                report.append(SINGLE_LINE_SEP);
                report.append("Incremental: ");
                report.append(Build.VERSION.INCREMENTAL);
                report.append(SINGLE_LINE_SEP);
                report.append(lineSeperator);

                Intent crashedIntent = new Intent(BaseActivity.this, CrashActivity.class);
                crashedIntent.putExtra("stacktrace", report.toString());
                crashedIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET);
                crashedIntent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                startActivity(crashedIntent);
                System.exit(0);
            }
        });
    }
}

//CrashAcitivity.java
/////////////////////
package com.example.pipiscrewnotes;


import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;


public class CrashActivity extends Activity {

    public void onCreate(Bundle icicle) {
        super.onCreate(icicle);

        setContentView(R.layout.crashreport);

        final String stackTrace = getIntent().getStringExtra("stacktrace");
        final TextView reportTextView = (TextView) findViewById(R.id.txtCrash);
        reportTextView.setText(stackTrace);
    }

    public void btnSend_Click(View view) {
        final TextView t = (TextView) findViewById(R.id.txtCrash);


        Intent emailIntent = new Intent(Intent.ACTION_SENDTO, Uri.fromParts(
                "mailto", "pipiscrew@gmail.com", null));
        emailIntent.putExtra(Intent.EXTRA_SUBJECT, "PipisCrew Notes Crash Report");
        emailIntent.putExtra(Intent.EXTRA_TEXT, t.getText().toString());
        startActivity(Intent.createChooser(emailIntent, "Send error to author..."));
    }
}

//crashreport.xml
/////////////////
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              android:orientation="vertical"
              android:layout_width="fill_parent"
              android:layout_height="fill_parent">

    <RelativeLayout
            xmlns:android="http://schemas.android.com/apk/res/android"
            android:layout_height="wrap_content"
            android:orientation="horizontal"
            android:layout_width="fill_parent">


        <TextView
                android:id="@+id/lblCrashed"
                android:layout_width="match_parent"
                android:layout_height="50dp"
                android:textColor="#ff5158"
                android:gravity="center"
                android:text="JUST CRASHED!"
                android:background="#000000"
                android:textSize="30dp"
                android:textStyle="bold"/>

        <Button
                android:id="@+id/btnSend"
                android:layout_alignParentRight="true"
                android:layout_height="wrap_content"
                android:layout_width="wrap_content"
                android:textSize="10dp"
                android:text="send error"
                android:onClick="btnSend_Click"/>

    </RelativeLayout>

    <ScrollView
            android:layout_width="fill_parent"
            android:layout_height="fill_parent"
            android:fillViewport="true"
            android:layout_weight="1.0"
            android:fadingEdgeLength="0dp">

        <TextView
                android:id="@+id/txtCrash"
                android:layout_width="fill_parent"
                android:layout_height="match_parent"
                android:inputType="textMultiLine|textNoSuggestions"
                android:textColor="#ffffff"
                android:background="#000000"
                android:gravity="top"

                />
    </ScrollView>
</LinearLayout>
