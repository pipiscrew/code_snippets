//http://davidwalsh.name/convert-images-grayscale

Doing so requires the most minimal of CSS:

img.bw {
	filter:  grayscale(1);
}
You can even animate an image to or from grayscale:

img.bw {
	filter:  grayscale(0);
}

img.bw.grey {
	filter:  grayscale(1);
	transition-property: filter;
	transition-duration: 1s;	
}
CSS fi