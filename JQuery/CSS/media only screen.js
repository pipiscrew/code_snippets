//http://unmatchedstyle.com/news/working-with-media-queries-and-min-width.php

#container {
	max-width: 960px;
	margin: 0 auto;
	background: #ccc;
	overflow: auto;
}

section {
	width: 70%;
	float: left;
	background: #eee;
}

aside {
	width: 30%;
	float: left;
	background: #bbb;
}

@media only screen and (max-width: 480px) {
	#container {
		width: 100%;
		background: #aaa;
	}

	section,
	aside {
		width: 100%;

	}

}