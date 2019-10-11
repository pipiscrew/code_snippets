$content = file_get_contents('http://site.com/image.jpg');

$originalSize = getimagesizefromstring($content);

$originalWidth = $originalSize[0];
$originalheight = $originalSize[1];

$newSize = 0.6;
 // 60% of the original size

$newWidth = $originalWidth * $newSize;
$newHeight = $originalHeight * $newSize;

//http://stackoverflow.com/questions/9630684/resize-image-from-another-server-and-show-it-in-my-website