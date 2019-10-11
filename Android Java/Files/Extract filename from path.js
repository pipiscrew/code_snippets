	public static String extractFilename(String val) {
		int idx = val.lastIndexOf(File.separatorChar);
		return val.substring(idx + 1, val.length());
	}