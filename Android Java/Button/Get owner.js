//http://stackoverflow.com/questions/5620772/get-text-from-pressed-button
public void onClick(View v) {
    // 1) Possibly check for instance of first 
    Button b = (Button)v;
    String buttonText = b.getText().toString();
    
    //or u can cast the tag to any class
	tabVARSchildren detail = (tabVARSchildren) b.getTag();
}