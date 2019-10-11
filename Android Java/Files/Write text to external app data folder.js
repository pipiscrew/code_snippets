//http://www.mysamplecode.com/2012/06/android-internal-external-storage.html

//sd/Android/namespace/files/..

//give permissions:
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />


                        String filename = "MySampleFile.txt";
                        String filepath = "MyFileStorage";
                        File myExternalFile = null;
                        //check if external storage is available and not read only
                        if (General.isSafeWriteExternal()) {
                            myExternalFile = new File(getExternalFilesDir(filepath), filename);
                        }

                        try {
                            FileOutputStream fos = new FileOutputStream(myExternalFile);
                            fos.write(result.toString().getBytes());
                            fos.close();
                        } catch (IOException e) {
                            e.printStackTrace();
                        } 
                        
                        
    public static boolean isSafeWriteExternal()
    {
        if (!General.isExternalStorageAvailable() || General.isExternalStorageReadOnly())
            return false;
        else
            return true;
    }
    private static boolean isExternalStorageReadOnly() {
        String extStorageState = Environment.getExternalStorageState();
        if (Environment.MEDIA_MOUNTED_READ_ONLY.equals(extStorageState)) {
            return true;
        }
        return false;
    }

    private static boolean isExternalStorageAvailable() {
        String extStorageState = Environment.getExternalStorageState();
        if (Environment.MEDIA_MOUNTED.equals(extStorageState)) {
            return true;
        }
        return false;
    }