//http://jsfiddle.net/aleaniquilador/GwnkM/
//tested&working, warning can use subscribe event when iFrame

//the html
	<div class="likeImage">
	    <iframe src="//www.facebook.com/plugins/like.php?href=google.com.ar&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=20" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:20px;"allowTransparency="true"></iframe>
	</div>

//the css
	.likeImage{
	    width: 275px;
	    height: 95px;
	    background-image: url("http://yaaya.mobi/images/fbLike.png");
	    background-repeat: no-repeat;
	}
	.likeImage iframe{
	    opacity: 0;
	}
