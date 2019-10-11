//http://www.mobiledevguide.com/2011/04/regenerate-androiddebugkey.html

keytool -genkey -v -keystore "D:\New folder\debug.keystore" -alias androiddebugkey -keyalg RSA -validity 10000

//http://androidbridge.blogspot.com/2012/01/debugkeystore-keystore-password.html
warning the default debug keystore must have password :
android