//http://stackoverflow.com/questions/5209842/read-write-file-to-internal-private-storage
int ch;
StringBuffer fileContent = new StringBuffer("");
FileInputStream fis = iContext.openFileInput( IDS_LIST_FILE_NAME );
while( (ch = fis.read()) != -1)
  fileContent.append((char)ch);
String data = new String(fileContent);

//Here is how you use the byte buffer version of read():

byte[] buffer = new byte[1024];
int length;
while ((length = fis.read(buffer)) != -1) {
    fileContent.append(new String(buffer));
}



//http://www.anddev.org/working_with_files-t115.html

                        // ##### Read the file back in #####
                       
                        /* We have to use the openFileInput()-method
                         * the ActivityContext provides.
                         * Again for security reasons with
                         * openFileInput(...) */
                        FileInputStream fIn = openFileInput("samplefile.txt");
                        InputStreamReader isr = new InputStreamReader(fIn);
                        /* Prepare a char-Array that will
                         * hold the chars we read back in. */
                        char[] inputBuffer = new char[TESTSTRING.length()];
                        // Fill the Buffer with data from the file
                        isr.read(inputBuffer);
                        // Transform the chars to a String
                        String readString = new String(inputBuffer);
                       
                        // Check if we read back the same chars that we had written out
                        boolean isTheSame = TESTSTRING.equals(readString);
 
                        // WOHOO lets Celebrate =)
                        Log.i("File Reading stuff", "success = " + isTheSame);
 
                } catch (IOException ioe) {
                        ioe.printStackTrace();
                }
