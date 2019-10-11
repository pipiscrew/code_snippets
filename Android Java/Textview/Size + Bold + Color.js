//size (http://stackoverflow.com/questions/2617266/how-to-adjust-text-font-size-to-fit-textview)
textView.setTextSize(TypedValue.COMPLEX_UNIT_PX, trySize);

//bold + italic (http://stackoverflow.com/questions/6200533/set-textview-style-bold-or-italic)
textView.setTypeface(null, Typeface.BOLD_ITALIC);
textView.setTypeface(null, Typeface.BOLD);
textView.setTypeface(null, Typeface.ITALIC);

//color
((TextView)view).setTextColor(0xFFFFFFFF); //white
((TextView)view).setTextColor(0xFF000000); //black