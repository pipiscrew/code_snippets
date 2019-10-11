//http://gist.github.com/davejamesmiller/3236415

<?php
 
	$file = $_GET['file'];
	 
	$original = "assets/logo.png";
	 
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
	 
	//Tell the browser what kind of file is come in
	header("Content-Type: image/jpeg"); 
	 
	//Output the newly created image in jpeg format
	ImageJpeg($thumbImage); 
	 
	// Close the files
	imagedestroy($image);
	imagedestroy($thumbImage);
?>



//Dynamic Image Generation
//http://webcheatsheet.com/php/dynamic_image_generation.php
<?php 
	//Send a generated image to the browser 
	create_image(); 
	exit(); 
	
	function create_image() 
	{ 
	    //Let's generate a totally random string using md5 
	    $md5 = md5(rand(0,999)); 
	    //We don't need a 32 character long string so we trim it down to 5 
	    $pass = substr($md5, 10, 5); 
	
	    //Set the image width and height 
	    $width = 100; 
	    $height = 20;  
	
	    //Create the image resource 
	    $image = ImageCreate($width, $height);  
	
	    //We are making three colors, white, black and gray 
	    $white = ImageColorAllocate($image, 255, 255, 255); 
	    $black = ImageColorAllocate($image, 0, 0, 0); 
	    $grey = ImageColorAllocate($image, 204, 204, 204); 
	
	    //Make the background black 
	    ImageFill($image, 0, 0, $black); 
	
	    //Add randomly generated string in white to the image
	    ImageString($image, 3, 30, 3, $pass, $white); 
	
	    //Throw in some lines to make it a little bit harder for any bots to break 
	    ImageRectangle($image,0,0,$width-1,$height-1,$grey); 
	    imageline($image, 0, $height/2, $width, $height/2, $grey); 
	    imageline($image, $width/2, 0, $width/2, $height, $grey); 
	 
	    //Tell the browser what kind of file is come in 
	    header("Content-Type: image/jpeg"); 
	
	    //Output the newly created image in jpeg format 
	    ImageJpeg($image); 
	    
	    //Free up resources
	    ImageDestroy($image); 
	} 
	?>



//https://gist.github.com/davejamesmiller/3236415
//Resize an image on the fly
<?php

	// This script takes an image and resizes it to the given dimensions, then saves
	// that version on the filesystem so Apache can serve it directly in the future.
	
	// It is inspired by Drupal's ImageCache module [1] and a blog post by Sumit
	// Birla [2], but was written from scratch.
	
	// It automatically doubles the dimensions if the suffix '@2x' is used, for use
	// with the jQuery Retina Display plugin or retina.js [4].
	
	// [1]: http://drupal.org/project/imagecache
	// [2]: http://sumitbirla.com/2011/11/how-to-build-a-scalable-caching-resizing-image-server/
	// [3]: https://github.com/mcilvena/jQuery-Retina-Display-Plugin
	// [4]: http://retinajs.com/
	
	// https://gist.github.com/davejamesmiller/3236415
	
	chdir(dirname(__FILE__));
	
	$size = $_GET['size'];
	$file = $_GET['file'];
	
	$original = "originals/$file";
	$target = "$size/$file";
	
	// Check the size is valid
	switch ($size) {
	  case 'image':
	    $thumbWidth = 210;
	    $thumbHeight = 104;
	    break;
	
	  case 'text':
	    $thumbWidth = 55;
	    $thumbHeight = 55;
	    break;
	
	  case 'photo':
	    $thumbWidth = 184;
	    $thumbHeight = null;
	    break;
	
	  case 'banner':
	    $thumbWidth = 422;
	    $thumbHeight = null;
	    break;
	
	  default:
	    die('Invalid image size');
	}
	
	// Check the filename is safe & check file type
	if (preg_match('#^[a-z0-9\.]+(@2x)?\.(jpg|jpeg|png)$#i', $file, $matches) && strpos($file, '..') === false) {
	  $retina = $matches[1];
	  $extension = $matches[2];
	} else {
	  die("Invalid filename: $file");
	}
	
	// Double the size for retina devices
	if ($retina) {
	  if ($thumbWidth) $thumbWidth *= 2;
	  if ($thumbHeight) $thumbHeight *= 2;
	  $original = str_replace('@2x', '', $original);
	}
	
	// Check the original file exists
	if (!is_file($original)) {
	  die('File doesn\'t exist');
	}
	
	// Make sure the directory exists
	if (!is_dir($size)) {
	  mkdir($size);
	  if (!is_dir($size)) {
	    die('Cannot create directory');
	  }
	  chmod($size, 0777);
	}
	
	// Make sure the file doesn't exist already
	if (!file_exists($target)) {
	
	  // Make sure we have enough memory
	  ini_set('memory_limit', 128*1024*1024);
	
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
	
	  // Make sure it's writable
	  chmod($target, 0666);
	
	  // Close the files
	  imagedestroy($image);
	  imagedestroy($thumbImage);
	}
	
	// Send the file header
	$data = getimagesize($original);
	if (!$data) {
	  die("Cannot get mime type");
	} else {
	  header('Content-Type: ' . $data['mime']);
	}
	
	// Send the file to the browser
	readfile($target);