//https://sites.google.com/site/ywritersj/installing-on-mac-os-x

1-
You can get yWriter5 working on OS X - using the free Mono library (http://mono-project.com/)
Click on Mac OS X, then click Framework next to the architecture you're on (Intel or PowerPC). If you're not sure which one you have, you can use Universal. Let the download complete and open the DMG image. Double-click the package icon, follow the prompts, and Mono will be installed.

2-
Make a directory on MAC with the name Sample and put your application files there 

Open up a Terminal window (I usually just do a Spotlight search for "Terminal"). Type in

cd /Applications/yWriter5
mono youapp.exe

Note for first-time usage: For some users, yWriter5 won't start up properly and seems to hang on the splash screen. If you're getting this, press Ctrl+C in the Terminal window to quit the application. Try restarting it with this command:

Mac-Mini:youApp grkenn$ mono yourApp.exe -h

This should allow yWriter5 to create its necessary files and get past the loading screen.