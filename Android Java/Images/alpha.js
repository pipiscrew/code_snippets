//http://stackoverflow.com/questions/7035770/how-to-disable-image-like-iphone-in-android

onClicking the ImageView

myImageView.getDrawable().mutate().setAlpha(70);
myImageView.invalidate();
this will make the image somewhat transparent. Lesser the value in setAlpha(), the more transparent the image will become.
