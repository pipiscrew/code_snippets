//http://alistapart.com/article/previewofhtml5

//embed video
	<video src="video.ogv" controls poster="poster.jpg" 
	width="320" height="240">
	<a href="video.ogv">Download movie</a>
	</video>
	
//embed audio
	<audio src="music.oga" controls>
	<a href="music.oga">Download song</a>
	</audio>
	
	
	
//example
	<video src="video.ogg" id="video"></video>
	<script>
	var video = document.getElementById("video");
	</script>
	<p>
	<button type="button" onclick="video.play();">Play</button>
	<button type="button" onclick="video.pause();">‖Pause</button>
	<button type="button" onclick="video.currentTime = 0;">≪Rewind</button>
	</p>