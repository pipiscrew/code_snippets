//http://stackoverflow.com/a/29015848/1320686

//res/drawable/progress_animation.xml
<?xml version="1.0" encoding="utf-8"?>

<animated-rotate xmlns:android="http://schemas.android.com/apk/res/android"
    android:drawable="@drawable/progress_image"
    android:pivotX="50%"
    android:pivotY="50%"/>
    
    
Picasso.with( context )
        .load( your_path )
        .error( R.drawable.ic_error )
        .placeholder( R.drawable.progress_animation )
        .into( image_view );