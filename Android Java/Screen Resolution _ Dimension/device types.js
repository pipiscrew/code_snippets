//http://stackoverflow.com/questions/15061238/how-to-find-the-device-as-ldpi-mdpi-hdpi-or-xhdpi
//find device type

  int density= getResources().getDisplayMetrics().densityDpi;

switch(density)
{
case DisplayMetrics.DENSITY_LOW:
   Toast.makeText(context, "LDPI", Toast.LENGTH_SHORT).show();
    break;
case DisplayMetrics.DENSITY_MEDIUM:
     Toast.makeText(context, "MDPI", Toast.LENGTH_SHORT).show();
    break;
case DisplayMetrics.DENSITY_HIGH:
    Toast.makeText(context, "HDPI", Toast.LENGTH_SHORT).show();
    break;
case DisplayMetrics.DENSITY_XHIGH:
     Toast.makeText(context, "XHDPI", Toast.LENGTH_SHORT).show();
    break;
}


//dp2px + px2dp online
http://labs.rampinteractive.co.uk/android_dp_px_calculator/

//tut
http://stefan222devel.blogspot.gr/2012/10/android-screen-densities-sizes.html