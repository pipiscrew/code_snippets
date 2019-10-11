//info for MAC : http://blogprogramistyandroid.blogspot.com/2011/04/converting-release-keys-to-debug.html
//info for PC : http://www.pipiscrew.com/2014/01/android-converting-release-key-to-debug

1-right-click the project > Android tools > Export Signed Application Package
2-create a keystore and a key to a file (ex d:\thisisatest) you have to write down the Alias given to key^ when creating!
3-running the following command from DOS prompt (from C:\Program Files\Java\jre7\bin) :

keytool -importkeystore -v -srckeystore “d:\thisisatest\test.keystore” -destkeystore “d:\thisisatestDEBUG\debug.keystore” -srcstorepass yourkeystorepassword -deststorepass android -srcalias alias  -destalias androiddebugkey -srckeypass yourkeypassword -destkeypass android

4-Windows -> Preferences -> Android – > Build browse and select the created debug key^
so now I have a debug key that has the same private/public key as my release key!!! to verify it go to

Windows -> Preferences -> Android – > Build
has the same MD5/SHA1 with release keystore!!