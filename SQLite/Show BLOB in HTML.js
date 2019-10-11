//http://stackoverflow.com/questions/6282351/in-php-how-i-show-various-images-from-a-blob-field-in-the-database-with-the-htm

Typically this is done by creating a wrapper script or function that retrieves the BLOB and delivers it with the appropriate content headers to be used as an <img src=''>

Doing it this way also gives you the benefit of being able to deliver or not deliver the image based on other authentication factors determined by your PHP. If, for example, a user doesn't have permission to see an image, you can instead show some default or blocking image in its place.

// File getimg.php
// Retrieve the image blob specified by $_GET['imgid'] from the database

// Assuming your blob is now in the variable $image...
header("Content-type: image/jpeg");
// Just echo out the image data
echo $image;
exit();
Now in your html:

<img src='getimg.php?imgid=12345' alt='this is your img from the database' />