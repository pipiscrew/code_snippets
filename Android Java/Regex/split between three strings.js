										String[] arr = x.split("<span");
										
										for (String line : arr) {
											
											Pattern p = Pattern.compile("title='(.*?)'(.*?)>(.*?)\\(");
											Matcher m = p.matcher(line);
											if (m.find()) {
											  System.out.println(m.group(1)); // => "3"
											}
										}