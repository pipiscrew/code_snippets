		if (General.JSONtxt == null) {
			General.JSONtxt = General.fileRead(getBaseContext(), "essential.txt");

			String myPattern = "<img[^>]+src\\s*=\\s*['\"]([^'\"]+)['\"][^>]*>";
			Pattern p = Pattern.compile(myPattern);
			Matcher m = p.matcher(General.JSONtxt.replace("\\", ""));
			String link = null;

			int k = 0;
			while (m.find()) {
				k += 1;
				link = m.group(1);
				System.out.println("Found link: " + link);
			}

			System.out.println("Total links: " + k);
		}