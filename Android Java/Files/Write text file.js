//http://www.anddev.org/working_with_files-t115.html

//write to sdcard
//Environment.getExternalStorageDirectory().getPath() + "/download/possible.txt"
FileWriter f = new FileWriter("/sdcard/download/possible.txt");

Every file that you generate with your code gets is 'signed' with the User-ID of the 
Application that created it. One From within your app you can set flags to make the file 
accessible (read and/or write) for other applications with other User-IDs 
(Flags: MODE_WORLD_READABLE and/or MODE_WORLD_WRITEABLE).

When you create a file with MODE_WORLD_WRITEABLE it will be writable 
( probably also readable ) by other Applications. MODE_PRIVATE will disallow them to do so.

There is a way to make two applications use the same userid
http://code.google.com/android/devel/security.html#userid


//The file is now located in the following folder on your emulator: 
//"/data/data/your_project_package_structure/files/samplefile.txt"
        try { // catches IOException below
                        final String TESTSTRING = new String("Hello Android");
                       
                        // ##### Write a file to the disk #####
                        /* We have to use the openFileOutput()-method
                         * the ActivityContext provides, to
                         * protect your file from others and
                         * This is done for security-reasons.
                         * We chose MODE_WORLD_READABLE, because
                         *  we have nothing to hide in our file */             
                        FileOutputStream fOut = openFileOutput("samplefile.txt",
                                                                MODE_WORLD_READABLE);
                        OutputStreamWriter osw = new OutputStreamWriter(fOut); 
 
                        // Write the string to the file
                        osw.write(TESTSTRING);
                        /* ensure that everything is
                         * really written out and close */
                        osw.flush();
                        osw.close();
