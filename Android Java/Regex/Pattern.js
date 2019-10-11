 // Direct use of Pattern:
 Pattern p = Pattern.compile("Hello, (\\S+)");
 Matcher m = p.matcher(inputString);
 while (m.find()) { // Find each match in turn; String can't do this.
     String name = m.group(1); // Access a submatch group; String can't do this.
 }