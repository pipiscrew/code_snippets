	public static boolean isInteger(String str)
	{
		try{
			int sample;
			sample = Integer.parseInt(str);
			return true; 
		}
		catch (Exception ex)
		{
			return false; 
		}
	}