//http://stackoverflow.com/questions/1486077/java-good-way-to-encapsulate-integer-parseint

	public static Integer parseInt(String text) {
		try {
			return Integer.valueOf(text);
		} catch (NumberFormatException e) {
			return 0;
		}
	}