//only for first word
	private String capitalize(String sString){
		if (sString!=null && sString.length()>2)
		{
			String val = sString.toLowerCase();
			val = Character.toString(val.charAt(0)).toUpperCase()+val.substring(1);
			
			return val;
		}
		else 
			return sString;
		
	}


//http://commons.apache.org/proper/commons-lang/apidocs/src-html/org/apache/commons/lang3/text/WordUtils.html#line.32
//http://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/text/WordUtils.html

//the call capitalize(model,null);

	   public static String capitalize(final String str, final char... delimiters) {
		         final int delimLen = delimiters == null ? -1 : delimiters.length;
		         if (str==null || delimLen == 0) {
		             return str;
		         }
		         final char[] buffer = str.toCharArray();
		         boolean capitalizeNext = true;
		         for (int i = 0; i < buffer.length; i++) {
		             final char ch = buffer[i];
		             if (isDelimiter(ch, delimiters)) {
		                 capitalizeNext = true;
		             } else if (capitalizeNext) {
		                 buffer[i] = Character.toTitleCase(ch);
		                 capitalizeNext = false;
		             }
		         }
		         return new String(buffer);
		     }
	   
	     //-----------------------------------------------------------------------
	     /**
	      * Is the character a delimiter.
	      *
	      * @param ch  the character to check
	      * @param delimiters  the delimiters
	      * @return true if it is a delimiter
	      */
	     private static boolean isDelimiter(final char ch, final char[] delimiters) {
	         if (delimiters == null) {
	             return Character.isWhitespace(ch);
	         }
	         for (final char delimiter : delimiters) {
	             if (ch == delimiter) {
	                 return true;
	             }
	         }
	         return false;
	     }