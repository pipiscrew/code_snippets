//https://gist.github.com/davejamesmiller/3236415

<?php
$file = $_GET['file'];

resize_image($file);

function resize_image($id) {
	$original = "prod_img/{$id}.jpg";
	$target = "prod_img/{$id}_thumb.jpg";

	if (file_exists($target))
		return $target;

	if (!file_exists($original))
		return "prod_img/404.jpg";
		
		
	$thumbWidth = 200;
	$thumbHeight = 200;

	// Get the current size & file type
	list($width, $height, $type) = getimagesize($original);

	// Load the image
	switch ($type) {
	case IMAGETYPE_GIF:
	  $image = imagecreatefromgif($original);
	  break;

	case IMAGETYPE_JPEG:
	  $image = imagecreatefromjpeg($original);
	  break;

	case IMAGETYPE_PNG:
	  $image = imagecreatefrompng($original);
	  break;

	default:
	  die("Invalid image type (#{$type} = " . image_type_to_extension($type) . ")");
	}

	// Calculate height automatically if not given
	if ($thumbHeight === null) {
		$thumbHeight = round($height * $thumbWidth / $width);
	}

	// Ratio to resize by
	$widthProportion = $thumbWidth / $width;
	$heightProportion = $thumbHeight / $height;
	$proportion = max($widthProportion, $heightProportion);

	// Area of original image that will be used
	$origWidth = floor($thumbWidth / $proportion);
	$origHeight = floor($thumbHeight / $proportion);

	// Co-ordinates of original image to use
	$x1 = floor($width - $origWidth) / 2;
	$y1 = floor($height - $origHeight) / 2;

	// Resize the image
	$thumbImage = imagecreatetruecolor($thumbWidth, $thumbHeight);
	imagecopyresampled($thumbImage, $image, 0, 0, $x1, $y1, $thumbWidth, $thumbHeight, $origWidth, $origHeight);

	// Save the new image
	switch ($type)
	{
	case IMAGETYPE_GIF:
	  imagegif($thumbImage, $target);
	  break;

	case IMAGETYPE_JPEG:
	  imagejpeg($thumbImage, $target, 90);
	  break;

	case IMAGETYPE_PNG:
	  imagepng($thumbImage, $target);
	  break;

	default:
	  throw new LogicException;
	}

	//Tell the browser what kind of file is come in 
	header("Content-Type: image/jpeg"); 

	//Output the newly created image in jpeg format 
	//ImageJpeg($thumbImage); 

	// Close the files
	imagedestroy($image);
	imagedestroy($thumbImage);

	return $target;
}