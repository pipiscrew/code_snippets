on a PC successfully converted and verified, I created a release 
r-click Prject > Android tools > Export Signed Application Package

when asked I created a new keystore name it test.keystore (+ a new key) I store it under d:\thisisatest, you have to write down the Alias given to key^ when creating!
Keep in mind that by default the debug keystore/key is under file :

C:\Users\username\.android\debug.keystore

running the following command from DOS prompt (from C:\Program Files\Java\jre7\bin) :

keytool -importkeystore -v -srckeystore “d:\thisisatest\test.keystore” -destkeystore “d:\thisisatestDEBUG\debug.keystore” -srcstorepass yourkeystorepassword -deststorepass android -srcalias alias  -destalias androiddebugkey -srckeypass yourkeypassword -destkeypass android

so now I have a debug key that has the same private/public key as my release key!!! to verify it go to

Windows -> Preferences -> Android – > Build

has the same MD5/SHA1 with release keystore!!