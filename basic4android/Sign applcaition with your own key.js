//http://www.basic4ppc.com/forum/basic4android-getting-started-tutorials/14049-tutorial-how-sign-apk-non-b4a-keystore.html
//https://groups.google.com/forum/#!forum/apptomarket

Here is my first tutorial for the community!

This tutorial will show you how to sign a B4A generated apk with a non-B4A keystore. I needed a way to do this for myself since I had some apps out created using AppInventor that I remade using B4A. On to the tut:

1. When you are ready to publish, in B4A select Project > Compile (without signing)
2. Go to \Main\Objects\bin and find the file called "temp.ap_". This is your app. Rename this file accordingly (i.e. "myapp.apk").
3. Copy your keystore file to the same directory as myapp.apk.
4. To make life easier, navigate to your android sdk folder and copy this file: \android-sdk\tools\zipalign.exe to the same folder as your apk and keystore.
5. Open Windows Command Prompt. Navigate to the folder where myapp.apk, keystore, and zipalign are
6. In Command Prompt type: jarsigner -verbose -keystore mykeystore.ks myapp.apk username
Change "mykeystore.ks" to your keystore's file name. Change "myapp.apk" to your app's file name. Change "username" to the username used in your keystore.
7. Enter your password when asked.
8. When it's finished, type this: zipalign -v 4 myapp.apk myapp_aligned.apk
9. You're done! myapp_aligned.apk is the file you'll need to upload to the market