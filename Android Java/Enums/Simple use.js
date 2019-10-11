//http://neozilon.com/java/java-enum-example

	 public enum fileMode{
		 MODE_PRIVATE (0),
		 MODE_WORLD_READABLE (1),
		 MODE_WORLD_WRITEABLE (2);
		
	    private final int id;

	    fileMode(int id) { this.id = id;}

	    public int getValue() { return id; }
	 }
	 
	 
	 
	 public static void readFile(Context baseContext ,String filepath, fileMode storage)
	 {
	 .
	 .
	 storage.getValue()
	 .
	 .
	 }
	 