1-
OpenSSL - http://code.google.com/p/openssl-for-windows/
extract OpenSSL to C:\OpenSSL

2-
drop the bat to C:\Program Files\Java\jdk1.7.0_07\bin
change
-keystore filepath
-alias




@echo Exporting keystore cert
cd /d C:\Program Files\Java\jdk1.7.0_07\bin
keytool -exportcert -alias androiddebugkey -keystore "D:\New folder\debug.keystore" > mycert.keystore.bin

@echo Converting to sha1
C:\OpenSSL\bin\openssl sha1 -binary mycert.keystore.bin > mycert.keystore.sha1

@echo Converting to base64
C:\OpenSSL\bin\openssl base64 -in "C:\Program Files\Java\jdk1.7.0_07\bin\mycert.keystore.sha1" -out mycert.keystore.base64

@echo Done, Android hash key for Facebook app is:
C:\OpenSSL\bin\openssl base64 -in "C:\Program Files\Java\jdk1.7.0_07\bin\mycert.keystore.sha1"
@pause


3-
will create 
	mycert.keystore.base64 <-here writes the needed value
	mycert.keystore.bin
	mycert.keystore.sha1
	
put it all to notepad++ if any error written there!


//http://stackoverflow.com/a/18590149
//http://developer.android.com/tools/publishing/app-signing.html#debugmode
Keystore name: "debug.keystore"
Keystore password: "android"
Key alias: "androiddebugkey"
Key password: "android"
CN: "CN=Android Debug,O=Android,C=US"