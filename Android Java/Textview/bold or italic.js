//http://stackoverflow.com/questions/6200533/set-textview-style-bold-or-italic
btnText.setTypeface(null, Typeface.BOLD);

textView.setTypeface(null, Typeface.BOLD_ITALIC);
textView.setTypeface(null, Typeface.BOLD);
textView.setTypeface(null, Typeface.ITALIC);
textView.setTypeface(null, Typeface.NORMAL);



//xml
<TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    
    android:textStyle="bold"
    
    android:text="@string/app_name"
    android:layout_gravity="center" 
/>
