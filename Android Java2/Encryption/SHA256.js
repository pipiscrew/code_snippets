//http://stackoverflow.com/a/18879453
	public static String SHA256 (String text) throws NoSuchAlgorithmException {

	    MessageDigest md = MessageDigest.getInstance("SHA-256");

	    md.update(text.getBytes());
	    byte[] digest = md.digest();

	    return Base64.encodeToString(digest, Base64.DEFAULT);
	}
	
	
//more @ 
//https://github.com/google/guava/wiki/Release19
//common\hash\Hashing.java