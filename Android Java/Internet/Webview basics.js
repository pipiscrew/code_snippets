        <WebView
            android:id="@+id/txtCAUSEcomp"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_below="@id/txtSUPPdescrSmall"
            android:textSize="12sp" />
            
            
//code
				WebView wb = (WebView) findViewById(R.id.txtSUPPdescrLarge);
				wb.loadData("<b>sdf</b>", "text/html", null);