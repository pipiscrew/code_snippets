//http://kyleschaeffer.com/development/pure-css-image-hover/

//As you can see, both static and hover images are contained within the same file. In order to display only half of the image at one time

.myButtonLink {
	display: block;
	width: 100px;
	height: 100px;
	background: url('/path/to/myImage.png') bottom;
	text-indent: -99999px;
}
.myButtonLink:hover {
	background-position: 0 0;
}

<a class="myButtonLink" href="#LinkURL">Leaf</a>