class simple {
	
	// Constructor
	simple(){
	 p = 1;
	 q = 2;
	 r = 3;
	}
	
	int p,q,r;
	public int addNumbers(int var1, int var2, int var3)
	{
		return var1 + var2 + var3;
	}
	
	public void displayMessage()
	{
		System.out.println("Display Message");
	}
}



class example1{
	public static void main(String args[])
	{
		// To create a new instance class
		Simple sim = new Simple();
		// To show the result of the addNumbers
		System.out.println("The result is " + Integer.toString(addNumbers(5,1,2)));
		// To display message
		sim.displayMessage();
	}
}