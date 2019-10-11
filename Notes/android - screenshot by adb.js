//http://blog.shvetsov.com/2013/02/grab-android-screenshot-to-computer-via.html
adb shell screencap -p /sdcard/screen.png
adb pull /sdcard/screen.png
adb shell rm /sdcard/screen.png