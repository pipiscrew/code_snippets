//http://www.pipiscrew.com/2016/03/android-saving-activity-state-on-android/

//parent
Intent i = new Intent();
i.putExtra("name_of_extra", myParcelableObject);
 
//child
Intent i = getIntent();
MyParcelable myParcelableObject = (MyParcelable) i.getParcelableExtra("name_of_extra");


//generate parcelable online
http://www.parcelabler.com/