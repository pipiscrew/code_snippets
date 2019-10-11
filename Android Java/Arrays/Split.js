//http://stackoverflow.com/a/3732820/1320686
String CurrentString = "Fruit: they taste good";
String[] separated = CurrentString.split(":");
separated[0]; // this will contain "Fruit"
separated[1]; // this will contain " they taste good"
You may want to remove the space to the second String:

separated[1] = separated[1].trim();