//http://www.pipiscrew.com/2014/11/html-play-mp3/

<script type='text/javascript' src='jquery-1.11.1.min.js'></script>
 
<script type="text/javascript" language="text/javascript">
    $(function()        {
 
            $('#btn_Play').on('click', function(e)              {
                    console.log("123");
                    var newSongEl = document.getElementById("muzik");
                    //newSongEl.currentTime = 0;
                    newSongEl.play();               });
 
            $('#btn_Pause').on('click', function(e)             {
                    console.log("456");
                    var newSongEl = document.getElementById("muzik");
                    newSongEl.pause();              });
        })
</script>
 
<body >
    <button id="btn_Play">        Play    </button>
    <button id="btn_Pause" >      Pause   </button>
    <audio id="muzik" src="chime.ogg"></audio>
</body>