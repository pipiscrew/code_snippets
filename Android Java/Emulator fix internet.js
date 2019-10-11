//http://stackoverflow.com/questions/2437366/android-emulator-internet-access

You could also try explicitly specifying DNS server settings, this worked for me.

In Eclipse:

Window>Preferences>Android>Launch

Default emulator options: -dns-server 8.8.8.8,8.8.4.4