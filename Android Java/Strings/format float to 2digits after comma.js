//format with locale, so not crash on GREEK!!!!

	public static Float format2decimal(Float val)
	{
		return  Float.parseFloat(String.format(Locale.US, "%.2f",val));
	}
	
	
	//		final DecimalFormat myFormat = new DecimalFormat("#.#");
//		return Float.parseFloat(myFormat.format(val));