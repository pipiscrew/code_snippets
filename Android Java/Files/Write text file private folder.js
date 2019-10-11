Context.openFileOutput is meant to be used for creating files ##private##
to your application. they go in your apps private data directory.
you supply a name, not a path: "name The name of the file to open;
can not contain path separators".


FileOutputStream will create the file in internal storage automatically.
There is no need to provide any path, you only need to provide the file name.


 FileOutputStream fOut = openFileOutput("possible.txt",MODE_PRIVATE);
 OutputStreamWriter osw = new OutputStreamWriter(fOut); 
 osw.write("THIS IS A TES!");
 osw.flush();
 osw.close();