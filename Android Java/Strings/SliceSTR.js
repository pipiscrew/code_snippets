	private String SliceSTR(String STR, String STR1, String STR2, int StartIndex) {
		try {

			int i1 = STR.indexOf(STR1, StartIndex);
			if (i1 < 0)
				return "";
			else
				i1 += STR1.length();

			int i2 = STR.indexOf(STR2, i1 + 1);
			if (i2 < 0)
				return "";

			return STR.substring(i1, i2).trim();
		} catch (Exception e) {
			return "";
		}
	}