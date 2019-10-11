$('#btn').on('click', function(e) {
	$('audio').each(function(e) {
		console.log(this.id);
	});	
});

//this enumerate all ctls as :
<audio id='audio_1' tabindex='0' controls='' type='audio/mpeg'>Sorry, your browser does not support HTML5 audio.</audio>
<audio id='audio_2' tabindex='0' controls='' type='audio/mpeg'>Sorry, your browser does not support HTML5 audio.</audio>
