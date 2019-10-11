String urlEncoded = "http://stackoverflow.com/search?q=" + Uri.encode(query);

	public static String EncodeURLFilename(String val)  {

		try {
			val = val.trim();

			if (val.length() == 0)
				return val;

			int pos = val.lastIndexOf("/");

			if (pos > -1){	
				return val.substring(0,pos + 1) + Uri.encode(val.substring(pos + 1));
			}
			else
				return val;
		} catch (Exception ex) {
			return val;
		}
	}	