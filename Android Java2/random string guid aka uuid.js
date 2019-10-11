//http://kodejava.org/how-do-i-generate-uuid-guid-in-java/

	public static String generate_guid() {
		UUID uuid = UUID.randomUUID();
		return uuid.toString();
	}