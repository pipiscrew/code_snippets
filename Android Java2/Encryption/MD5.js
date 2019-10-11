//valid
	public static final String md5(final String s) {
	    final String MD5 = "MD5";
	    try {
	        // Create MD5 Hash
	        MessageDigest digest = java.security.MessageDigest
	                .getInstance(MD5);
	        digest.update(s.getBytes());
	        byte messageDigest[] = digest.digest();

	        // Create Hex String
	        StringBuilder hexString = new StringBuilder();
	        for (byte aMessageDigest : messageDigest) {
	            String h = Integer.toHexString(0xFF & aMessageDigest);
	            while (h.length() < 2)
	                h = "0" + h;
	            hexString.append(h);
	        }
	        return hexString.toString();

	    } catch (NoSuchAlgorithmException e) {
	        e.printStackTrace();
	    }
	    return "";
	}
	


//no valid for PHP and others
	public static String MD5 (String text) throws NoSuchAlgorithmException {

	    MessageDigest md = MessageDigest.getInstance("MD5");

	    md.update(text.getBytes());
	    byte[] digest = md.digest();

	    return Base64.encodeToString(digest, Base64.DEFAULT);
	}