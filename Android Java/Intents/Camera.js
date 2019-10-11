//http://stackoverflow.com/questions/9890757/android-camera-data-intent-returns-null

//call
Intent cameraIntent = new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
startActivityForResult(cameraIntent, 2);
And here is the result:

//the event when return back from camera
protected void onActivityResult(int requestCode, int resultCode, Intent imageReturnedIntent)
{ 
    super.onActivityResult(requestCode, resultCode, imageReturnedIntent);

    if(resultCode == RESULT_OK)
    {
        Uri selectedImage = imageReturnedIntent.getData();
        ImageView photo = (ImageView) findViewById(R.id.add_contact_label_photo);
        Bitmap mBitmap = null;
        try
        {
            mBitmap = Media.getBitmap(this.getContentResolver(), selectedImage);
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
    }
}