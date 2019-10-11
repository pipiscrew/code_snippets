//http://stackoverflow.com/questions/5369682/get-current-time-and-date-on-android

SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd_HHmmss");
String currentDateandTime = sdf.format(new Date());