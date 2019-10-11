	private String[] makecalculation() {
		 String[] res = new String[2];
	     long second;
	     
	     //from textbox to variable
	     second= Long.parseLong(txt2.getText());
	     
	     //value with comma should be converted
	     second = (long) 0.100;
	     
	     //the long variable should be converted to STRING!
	     res[0] = String.valueOf(second);

		 //return String[] res ! 
	     return res;
	 }